/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  var storage = [];
  // add an item to the top of the stack
  this.push = function(item){
    storage.push(item);
  };

  // remove an item from the top of the stack
  this.pop = function(){
    return storage.pop();
  };

  // return the number of items in the stack
  this.size = function(){
    return storage.length; 
  }
  return this;
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack;
  var outbox = new Stack;
  // called to add an item to the `queue`
  this.enqueue = function(val){
    // TODO: implement `enqueue`
    inbox.push(val);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    if(!outbox.size()) {
      while(inbox.size()) {
        outbox.push(inbox.pop());
      } 
    }
    return outbox.pop();
  }

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
    return outbox.size() + inbox.size();
  }
};


//inbox //an array with 3 helper methods (push, pop, size)
//outbox //an array with 3 helper methods (push, pop, size)
