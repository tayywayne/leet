// problem = https://leetcode.com/problems/merge-two-sorted-lists/
// time taken = 20-30 min
// difficulty = easy?? linked lists......

// soulution
// solutions explinations from - https://www.youtube.com/watch?v=cXxf46pbvOI

var mergeTwoLists = function(list1, list2) {
    let dummy = new listNode(0)
    let head = dummy

    while(list1 && list2){
        if(list1.val <= list2.val){
            dummy.next = list1
            list1 = list1.next
        }else {
            dummy.next = list2
            list2 = list2.next
        }
        dummy = dummy.next
    }

    if(list1 !== null){
        dummy.next = list1
    } else {
        dummy.next = list2
    }
    return head.next
}


// my first solution (broken)
// i first was going to go at this with a stack, but realized it wouldnt work and i need to learn linked lists for this problem to be solved. so this solution is not finished, nor works. but was my thought process
var mergeTwoLists = function(list1, list2) {
    if(list1.length === 0 && list2.length === 0) return list1
    merged = []
    len = 0
    if(list1.length >= list2.length) {
        len = list1.length
    } else {
        len = list2.length
    }
    for(i = 0; i < len; i++) {

    }
};
