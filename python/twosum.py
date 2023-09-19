# problem - https://leetcode.com/problems/two-sum/
# time taken - 10-20 min
# difficulty - easy

# my solution
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]  # Input list of integers
        :type target: int      # Target sum
        :rtype: List[int]     # Return indices that sum up to target
        """
        # Iterate through the elements and their indices in the nums list
        for i, num in enumerate(nums):
            for j, n in enumerate(nums):
                # Check if the sum of the current pair of elements equals the target
                # and ensure the indices are different
                if num + n == target and i != j:
                    # Return the indices of the pair that satisfies the condition
                    return [i, j]

# this was done a few months ago, id like to retry in JS and make it better
