module.exports = (accuracy=20,check=500)=>{

	let now = Date.now()
	let interval = Math.floor(check/accuracy)
	
	if (interval < 1)
		throw new Error('check must be greater than accuracy')

	let c = 0
	
	setInterval(()=>{
		c++
		if (c==interval) {
			c=0
			now = Date.now()
		} else {
			now+=accuracy
		}
	},accuracy)
	
	return ()=>now
}

if (!module.parent) {
	let nowish = module.exports()
	setInterval(()=>{
		console.log('discrepancy: %d',Date.now()-nowish())
	},100)
}
