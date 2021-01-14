class HashTable {
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for(let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		const index = this._hash(key);
		if(!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}

	get(key) {
		const index = this._hash(key);
		const ele = this.keyMap[index];
		if(ele) {
			for(let arr of ele) {
				if(arr[0] === key) {
					return arr;
				}
			}
		}
		return undefined
	}
}

const hash = new HashTable();
hash.set('red', 1);
hash.set('blue', 3);
hash.set('green', 3);

console.log(hash.keyMap);