var Utils = new Class({

	initialize:function(){},
	
	//reports a message in a div
	report:function(message,el,pos,col){
		var c = $chk(col) ? col : '#0ba02f';
		var p = $chk(pos) ? pos : 'bottom';
		var d = $chk(el) ? $(el) : $(document.body)
		var box = new Element('div');
		box.inject(d,p);
		box.setStyle('color',c);
		box.appendText(message);
	},
	
	uniq:function(array){
		var u = [];
		for(var i=0; i<array.length; i++){
			if(!u.contains(array[i])){ u.push(array[i]); }
		}
		return u;
	},
	
	max:function(array){
		var maxnumber = null;
		var index = null;
		for(var i=0; i<array.length; i++){
			if(array[i] > maxnumber){ 
				maxnumber = array[i];
				index = i;
			}
		}
		return { number:maxnumber,index:index };
	}

});//end class
