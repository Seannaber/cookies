//var name = prompt("What is your name?");
//var visits = $.cookie("visits", Number);


if ($.cookie("sugar") > 0) {
	$("#sugar").html($.cookie("sugar"));
} else {
	$.cookie("sugar", 0);
};

if ($.cookie("choco") > 0) {
	$("#choco").html($.cookie("choco"));
} else {
	$.cookie("choco", 0);
};

if ($.cookie("lemon") > 0) {
	$("#lemon").html($.cookie("lemon"));
} else {
	$.cookie("lemon", 0);
};



function addsugar() {
	$.cookie("sugar", Number($.cookie("sugar")) + 1);
	$("#sugar").html($.cookie("sugar"));
};

function minsugar() {
	if (Number($.cookie("sugar")) > 0) {
		$.cookie("sugar", Number($.cookie("sugar")) - 1);
		$("#sugar").html($.cookie("sugar"));
	} else {
		$.cookie("choco", 0);
	};
};

function addchoco() {
	$.cookie("choco", Number($.cookie("choco")) + 1);
	$("#choco").html($.cookie("choco"));
};

function minchoco() {
	$.cookie("choco", Number($.cookie("choco")) - 1);
	$("#choco").html($.cookie("choco"));
};

function addlemon() {
	$.cookie("lemon", Number($.cookie("lemon")) + 1);
	$("#lemon").html($.cookie("lemon"));
};

function minlemon() {
	$.cookie("lemon", Number($.cookie("lemon")) - 1);
	$("#lemon").html($.cookie("lemon"));
};

$("#deletecookies").click(function() {
	$.cookie("sugar", 0);
	$("#sugar").html($.cookie("sugar"));
	$.cookie("choco", 0);
	$("#choco").html($.cookie("choco"));
	$.cookie("lemon", 0);
	$("#lemon").html($.cookie("lemon"));
});

/*function deletecookies() {
	$.cookie("sugar", null);
	$.cookie("choco", null);
	$.cookie("lemon", null);
};

if (visits != undefined) {
	$.cookie("visits", visits + 1);
} else {
	$.cookie("visits", 1);
};

$("#cookietime2").html("You've visited the site " + $.cookie("visits") + " times.");*/