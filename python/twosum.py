# problem - https://leetcode.com/problems/two-sum/
# time taken - 10-20 min
# difficulty - easy

# my solution
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i, num in enumerate(nums):
            for j, n in enumerate(nums):
                if num + n == target and i != j:
                    return [i, j]
