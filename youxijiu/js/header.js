(function(){
	$.ajax({
		type:"get",
		url:"header.html",
	}).then(function(html){
		var link=document.createElement("link");
		link.rel="stylesheet";
		link.href="css/common.css";
        link.href="css/style1.css";
        link.href="css/home.css";
link.href="css/bootstrap.css";
		document.head.appendChild(link);
		document.getElementById("header").innerHTML=html;
	})

	

		
			
})();

    