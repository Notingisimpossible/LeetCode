/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 循环链表
var detectCycle = function(head) {
  // 至少 2 个节点才能构成一个环
if (!head || !head.next) {
  return null;
}

// 设置快慢指针
let slow = head;
let fast = head;

// 如果快指针一直没有追上慢指针
while (fast != null && fast.next!=null) {
  slow = slow.next;
  fast = fast.next.next;
  if(slow==fast){
      let p = slow
      slow = head
      while(p!=slow){
          p=p.next
          slow=slow.next
      }
      if(p==slow)return slow
  }
}
// 如果有环，那么快指针会追上慢指针
return null;
};