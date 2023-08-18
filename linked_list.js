document.write(`<b>Linked List</b> <br/> Its a type of data structure which is used to store list of values <br/>
Unlike the array which allocates memory and stores data sequentially(which makes deficult in inserting and removing the data), in linked list values are not stored in sequentially.
<br/>
In liked list each element stored is refered to as <b>Nodes</b>. Each node contains value and pointer, this pointer points to the next element or Node.
Note: The pointer will refers to the Null when it comes to the end of the list
<br/>
The linked list contains <u>head</u> and <u>tail</u> which points towards start and end of the list
<img class="image" src="/images/linked_list_eg.jpg">
<br/>
In linked list insertion and deletion of values was easy but accessing values randomlly is not so easy.`)
//  lets start with code
class Node {
  constructor(val) {
    this.value = val
    this.next = null
    // here if next value is not assigned or created then it assign value null
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
    // at the start head and tail will be assigned with value null after inserting the value head and tail will get updated
  }
  push(val) {
    var newNode = new Node(val)
    if (this.head == null && this.tail == null) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    // if we are not returning any value then it will show as undefiend
    //  so to return whole list just need to return this  --> it will return the current list
    return this
  }
  traverse() {
    let current = this.head
    while (current) {
      console.log(current)
      current = current.next
    }
  }
  pop(){
    if(!this.head){
      return undefined
    }
    var current = this.head
    var prev = current
    while(current.next){
      prev= current
      current = current.next // this line will help us to move one element ahead
      
    }
   this.tail= prev
    this.tail.next= null
    this.length--
    if(this.length === 0){ // this is an edge case where if the length is equal to zero then head and tail will be assigned null
      this.head=null
      this.tail=null
    }
    return current
    // perv.next = null
  }
  shift(){
    //  to remvoe start of the element
    if(!this.head){
      return undefined
    }
    var oldhead = this.head
    // var nexthead= this.head.next
    this.head = oldhead.next
    this.length--
    console.log(oldhead.value)
    // console.log(nexthead.value)
    console.log(this.head.value)
    if(this.length === 0){ // this is an edge case where if the length is equal to zero then head and tail will be assigned null
      this.head=null
      this.tail=null
    }
    return oldhead
  }
  unshift(val){
    if(!this.head){
      return undefined
    }
    var newheadnode = new Node(val)
    if (this.head == null && this.tail == null) {
      this.head = newNode
      this.tail = this.head
    }
  else
    { var currenthead = this.head
    this.head = newheadnode
    newheadnode.next = currenthead
    this.length++
      }
    return this
  }


}



// var first = new Node("1")

// first.next =new Node("2")
// first.next.next =new Node("3")
// first.next.next.next = new Node("4")
// console.log(first)
// if i want to assign any new value then i need to write first.next.next...... it goes on.., so to avoid that, we can create a method which will do that for us.
/*
Node {value: "hi", next: Node}
next: Object
next: Object
next: null
value: "this"
__proto__: Object
value: "hello"
__proto__: Object
value: "hi"
__proto__: Object 
*/
let list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)



console.log(list)
// At the start it will be empty
// SinglyLinkedList {head: null, tail: null, length: 0}
/*
list.push("h1llo")
SinglyLinkedList {head: Node, tail: Node, length: 1}
// for the first element push head and tail will point towards the same node
list.push("sagar")
SinglyLinkedList {head: Node, tail: Node, length: 2}
head: Object
next: Object // 2nd node  
next: null // there are only two elements so next is set to null
value: "sagar"
__proto__: Object
value: "h1llo"   // 1st node
__proto__: Object
length: 2
tail: Object  // tail is pointing towards the last element of the node
next: null
value: "sagar"
__proto__: Object
__proto__: Object
 */

 