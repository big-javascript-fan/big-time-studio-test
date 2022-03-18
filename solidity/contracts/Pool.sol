//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/access/AccessControl.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Pool is AccessControl {

    using SafeMath for uint256;

    event RewardDeposit(uint256 deposit, uint256 depositAt);
    event RewardPaid(address indexed user, uint256 reward);

    uint256 rewardRate = 1;
    uint256 fixedTotalSupply = 800;
    uint256 rewardsPool = 0;
    
    struct StakeList{
        uint256 stakesAmount; 
        uint256 rewardsAmount;
        uint256 lastUpdateTime;
    }

    /**
    * @notice The accumulated stake status for each stakeholder.
    */
    mapping(address => StakeList) public stakeLists;
    
    /**
    * @dev Creates a staking contract that handles the staking, unstaking, getReward features
    */    
    constructor () {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
    }

    /**
     * @notice method to deposit from team wallet
     */
    function deposit() external payable onlyRole(DEFAULT_ADMIN_ROLE) {
        rewardsPool += msg.value;
        emit RewardDeposit(msg.value, block.timestamp);
    }

    /**
    * @notice A method for this contract stakeholder to create a stake.
    * uint256 The amount of wei in this method.
    */
    function stake() external payable returns (bool) {
        uint256 _amount = msg.value;
        require(_amount > 0, "The amount to be transferred should be larger than 0");

        StakeList storage _personStakeSatus = stakeLists[msg.sender];
        _personStakeSatus.rewardsAmount = updateReward(msg.sender);
        _personStakeSatus.stakesAmount += _amount;
        _personStakeSatus.lastUpdateTime = block.timestamp;

        return true;
    }

    /**
    * @notice A method for this contract stakeholder to unstake.
    * uint256 The amount of wei in this method.
    * @param _amount The size of the unstake.
    */
    function unStake(uint256 _amount) external returns (bool) {
        StakeList storage _personStakeSatus = stakeLists[msg.sender];

        require (_personStakeSatus.stakesAmount != 0, "No stake");
        require(_amount > 0, "The amount to be transferred should be larger than 0");
        require(_amount <= _personStakeSatus.stakesAmount, "The amount to be transferred should be less than Deposit");

        _personStakeSatus.rewardsAmount = updateReward(msg.sender);
        _personStakeSatus.stakesAmount -= _amount;
        _personStakeSatus.lastUpdateTime = block.timestamp;

        payable(msg.sender).transfer(_amount);

        return true;
    }

    /**
    * @notice A method to allow a stakeholder to check his rewards.
    * uint256 The amount of wei in this method.
    */
    function getReward() public returns(bool) {
        StakeList storage _personStakeSatus = stakeLists[msg.sender];

        _personStakeSatus.rewardsAmount = updateReward(msg.sender);
        require (_personStakeSatus.rewardsAmount != 0, "No rewards");

        uint256 rewardAmount = _personStakeSatus.rewardsAmount;
        require(rewardsPool > rewardAmount, "Reward pool is not enough now");

        payable(msg.sender).transfer(rewardAmount);
        _personStakeSatus.rewardsAmount = 0;
        _personStakeSatus.lastUpdateTime = block.timestamp;

        emit RewardPaid(msg.sender, rewardAmount); 

        return true;
    }

    /**
    * @notice A method to calcaulate the stake rewards for a stakeholder for all transactions.
    * @param _account The stakeholder to retrieve the stake rewards for.
    * @return uint256 The amount of ethers.
    */
    function updateReward(address _account) public view returns (uint256) {
        StakeList storage _personStakeSatus = stakeLists[_account];

        if (_personStakeSatus.stakesAmount == 0) {
            return _personStakeSatus.rewardsAmount;
        }
        return _personStakeSatus.rewardsAmount
            .add(block.timestamp
            .sub(_personStakeSatus.lastUpdateTime)
            .mul(_personStakeSatus.stakesAmount)
            .mul(rewardRate)
            .div(fixedTotalSupply)
            .div(10000));   // it means that rewardRate is 0.001%
    }

    /**
    * @notice A method to retrieve the stake for a stakeholder.
    * @param _stakeholder The stakeholder to retrieve the stake for.
    * @return uint256 The amount of ethers.
    */
    function stakeOf(address _stakeholder) public view returns(uint256) {
        StakeList storage _personStakeSatus = stakeLists[_stakeholder];        
        return _personStakeSatus.stakesAmount;
    }

    /**
    * @notice A method to retrieve the rewards for a stakeholder.
    * @param _stakeholder The stakeholder to retrieve the rewards for.
    * @return uint256 The amount of ethers.
    */
    function rewardOf(address _stakeholder) public view returns(uint256) {
        StakeList storage _personStakeSatus = stakeLists[_stakeholder];        
        return _personStakeSatus.rewardsAmount;
    }
}