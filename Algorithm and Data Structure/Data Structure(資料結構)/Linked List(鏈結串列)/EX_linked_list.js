// 鏈結串列有起始位置 head，亦即串列中第一筆 Node。
// Node 節點以 item 存放資料。
// Node 節點以 next 作為指標，指向下一個 Node。
// 為 List 加入一些參數如 length ，便於後續操作。
// https://medium.com/@nchuuu/linked-list-es6-javascript%E5%AF%A6%E4%BD%9C%E5%8F%8Aleet-code%E9%A1%8C%E7%9B%AE%E8%A7%A3%E6%9E%90-4afcd9a67b3d

class LinkedList {
  /**
   * 
   */
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // 新增節點到尾部
  append(item) {
    let node = new Node(item);

    // 第一個節點(Node)
    if (!this.head) {
      this.head = node;
    } else {
      // 找到尾巴
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
    }
    this.length++;
  }

  // 刪除節點
  remove(index) {
    // 檢查index是否可用
    if (index < 0 || index > this.length) {
      return null;
    }
    // 對遍歷到的節點進行暫存
    let current = this.head;
    let prev = null;
    let idx = 0;

    // 如果是第一個節點(Node)
    if (index === 0) {
      // 將head指向到next
      this.head = current.next;
    } else {
      // 找到index
      while (idx++ < index) {
        // 將prev設置為current 和 移動current到next
        prev = current;
        current = current.next;
      }
      // 找到index,連結prev.next current.next
      prev.next = current.next;
    }
    this.length--;
  }

  // 插入
  insert(index, item) {
    // 檢查index是否合法
    if (index < 0 || index > this.length) {
      return null;
    }

    let node = new Node(item);
    let current = this.head;
    let prev = null;
    let idx = 0;

    if (index === 0) {
      this.head = node;
      node.next = current;
    } else {
      while (idx++ < index) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
    this.length++;
  }
}

class Node {
  /**
   * 節點
   * @param {*} item 
   */
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}