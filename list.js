'use strict';

const crypto = require('crypto');

const getSha1 = data =>
  crypto
    .createHash('sha1')
    .update(data)
    .digest('hex');

const util = {
  getSha1
  // getSha1: function (data) {
  //   var shasum = crypto.createHash('sha1');
  //   shasum.update(data);
  //   return shasum.digest('hex');
  // }
};


class ListNode {

  constructor(value, next) {
    if (arguments.length < 2) this.next = null;
    else this.next = next;
    this.value = value;
    this.id = util.getSha1(value);
  }

  toString() {
    let ids = [],
        cur = this;
    while(cur) {
      ids.push(cur.id);
      cur = cur.next;
    }
    return `[${ids.join(' ')}]`
  }

  length() {
    if(!this.next) return 1;
    else return 1 + this.next.length();
  }

  shiftNode(value) {
    return new ListNode(value, this);
  }

  append(ln) {
    if (!this.next) return new ListNode(this.value, ln);
    else if (this.next) return new ListNode(this.value, this.next.append(ln))
  }

  // remove(ln) {
  //   if (!this.next) return;

  //   new ListNode(this.value, ln);
  //   else if (this.next) return new ListNode(this.value, this.next.append(ln))




  // }
}




// function ListNode (value, next) {
//   if (arguments.length < 2) this.next = null;
//   else this.next = next;

//   this.value = value;

//   this.id = util.getSha1(this.value);

// }

// ListNode.prototype.toString = function() {

//   // if(!this.next) {
//   //   return '[' + this.id + ']'
//   // }
//   var current = this;
//   var array = [];
//   do {
//     array.push(this.id);
//     if(!this.next) {
//       current = this.next;
//     }
//   } while(current.next);

//   return '[' + array.join(' ') + ']'
// }

module.exports = {
  util,
  ListNode
};
