function Account(balance) {
	return {
		doTransaction : function doTransaction(amount, operation) {
			if (isNaN(amount)) {
				throw new Error("amount NAN");
			}
			if (amount < 0) {
				throw new Error("invalid amount");
			}
			if ("+" === operation) {
				return balance += amount;
			} else {
				if (amount > balance) {
					throw new Error("insufficient balance");
				}
				return balance -= amount;
			}
		}
	};
}