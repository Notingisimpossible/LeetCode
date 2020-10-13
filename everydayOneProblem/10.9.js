// 判断环形链表
// 快慢指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head==-1||!head){
      return false
  }
  let slow = head
  let fast = head
  while(fast){
    if(slow.next){
        slow = slow.next
    }else{
        return false
    }
    if(fast.next){
        if(fast.next.next){
            fast = fast.next.next
        }else{
            return false
        }
    }else{
        return false
    }
    if(fast == slow) return true
  }
  return false
};