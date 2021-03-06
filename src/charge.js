function charge(input, ledger) {
	for (let record of ledger) {
		if (record.limit < record.balance) {
			record.balance = 'error';
		} else {
			if (record.name === input.name && record.balance !== 'error') {
				if (record.balance + input.charge <= record.limit) {
					record.balance += input.charge;
				}
			}
		}
	}
	return ledger;
}

module.exports.charge = charge;
