var editButton = document.getElementById('editButton');
var styleButton = document.getElementById('styleButton');
var box1 = document.getElementById("box1");
var txtSpace = document.getElementById('txtSpace');
var editSpace = document.getElementById("editSpace");

//видиме невидиме поле редагування
	editButton.addEventListener('click', function(){
		txtSpace.value = box1.innerHTML;
		editSpace.classList.toggle("show");
        styleList.classList.remove('show');
	});

var styleButton = document.getElementById('styleButton');

//видиме невидиме поле style
	styleButton.addEventListener('click', function(){
		var styleList = document.getElementById('styleList');
		styleList.classList.toggle('show');
        editSpace.classList.remove('show');
        addList.classList.remove('show');
		
	});

var saveBut = document.getElementById('saveBut');
var txtSpaceClear = document.getElementById("txtSpaceClear");

//кнопка збрерігання
	saveBut.addEventListener('click', function(){
		if(txtSpace.value==''){
			txtSpaceClear.classList.add('show');
			txtSpace.style.border='5px solid red';
			
			}
		else{
			box1.innerHTML=txtSpace.value;
			txtSpaceClear.classList.remove('show');
		}
	});




var clearBut = document.getElementById("clearBut");
	clearBut.addEventListener('click',function(){
		txtSpace.value='';
	})

var f1 = document.forms.f1;
//задаєм розмір шрифту для тексту в основному боксі
	for(let i=0; i<f1.length;i++){
		f1.elements[i].onclick=function(){
			box1.style.fontSize = this.value;
		}
	}

var f2 = document.forms.f2;
//заміна шрифта в основному боксі
	f2.selectList.onchange = function() {
		
 		for(let i = 0; i < f2.selectList.length; i++) {
 			if (f2.selectList.options[i].selected){
				box1.style.fontFamily= f2.selectList.options[i].innerHTML;
		
		
			}
 		}
	}


var arrPhoto = [ "images/snow-3110588_960_720.jpg", "images/photo-1482784160316-6eb046863ece.jpg", "images/Mountaineer-reaching-the-summit-Dan-Briski.jpg", "images/images.jpg", "images/images3.jpg", "images/images2.jpg", "images/images1.jpg", "images/Ansicht-Kitzsteinhorn-Maiskogel-header.jpg", "images/alpii-austrieci-acasa.ro_.jpg" ];
			
var arrColor=["red", "yellow","green","purple","blue","pink","gray","orange","darkred"];
			
var images = document.getElementsByClassName('images');
var colorText= document.getElementsByClassName('colorText');
var color = document.getElementById('color');
var bgColor = document.getElementById('bgColor');
var block = document.getElementById('block');
var block2 = document.getElementById('block2');

//переключання між блоками "колір" і "картинки"
	color.addEventListener('click', function(){
		block.classList.toggle('show');
		block2.classList.remove('show');
		
//присвоєння боксам кольорів
			for(i=0; i<colorText.length; i++){
				colorText[i].style.background= arrColor[i];
			}
			

	});
//переключання між блоками "колір" і "картинки"	 
	bgColor.addEventListener('click', function(){
		block2.classList.toggle('show');
		block.classList.remove('show');
		
// присвоєння внутрішнім боксам картинок
		for(i=0; i<images.length;i++){
			images[i].style.background = "url(" + arrPhoto[i] + ")";
			images[i].style.backgroundSize ="cover";
		}
	});
//присвоєння кольору для текста
	for(let i=0;i<colorText.length;i++){
			colorText[i].onclick = function(){
			box1.style.color = arrColor[i];
		}
										  
	}

//присвоєння фону для основного бокса
	for(let i=0; i<images.length;i++){
		images[i].addEventListener('click', function(){
			box1.style.background='url(' + arrPhoto[i] +')';
			box1.style.backgroundSize='cover';
		});
	}

var clear = document.getElementById('clear');

//очищення фону і кольору текста в основному блоці
clear.addEventListener('click', function(){
	box1.style.background='url(9157aa94e693d90.jpg)';
	box1.style.backgroundSize='cover';
	box1.style.color='white';
	box1.style.fontFamily='monospace';
	box1.style.fontSize='10pt';
});

var boldText = document.getElementById('boldText');
var italicText = document.getElementById('italicText');

//шрифт
boldText.addEventListener('click', function(){
    if(this.checked){
        box1.style.fontWeight='bold';
    }
    else{
         box1.style.fontWeight='normal';
    }
    
})

//стиль
italicText.addEventListener('click',function(){
    if(this.checked){
        box1.style.fontStyle='italic';
    }
    else{
        box1.style.fontStyle='normal';
    }
})


var list1 = document.getElementById('list1');
var addList = document.getElementById('addList');
var addBut = document.getElementById('addBut');

//переключення між основною сторінкою і "add"
addBut.addEventListener('click', function(){
	addList.classList.toggle('show');

});


let closeBut = document.getElementById('closeBut');
let closeBut2 = document.getElementById('closeBut2');
let closeBut3 = document.getElementById('closeBut3');
let listTab = document.getElementById('listTab');
let rowCount = document.getElementById('rowCount');
let cellCount = document.getElementById('cellCount');
let cellWidth = document.getElementById('cellWidth');
let cellHeight = document.getElementById('cellHeight');
let borderWidth = document.getElementById('borderWidth');
let borderType = document.getElementById('borderType');
let bborderColor = document.getElementById('borderColor');
let createBut = document.getElementById('createBut');
let createBut2 = document.getElementById('createBut2');
let createBut3 = document.getElementById('createBut3');

function closeLiTab(){
	for(let i=0; i<f3.length;i++){
		if(f3.elements[i].checked==true){
			f3.elements[i].checked=false;
		}
	}
		listList.style.display='none';
		tableList.style.display='none';
}

closeBut.addEventListener('click',closeLiTab);
closeBut2.addEventListener('click',closeLiTab);
closeBut3.addEventListener('click',closeLiTab);

function tableNull(){
	rowCount.value='';
	cellCount.value='';
	cellWidth.value='';
	cellHeight.value='';
	borderWidth.value='';
}

function olListNull(){
	olListItems.value='';
}
function ulListNull(){
	ulListItems.value='';
}
//функція таблиці, ліста і переключання на основну сторінку з "add"
function multiFunc(e){ 
let f4 = document.forms.f4;
if(f4.checkValidity()){
	e.preventDefault();
	tableFunc(); 
	tableNull();
}
	}
function multiFunc2(e){ 
	let f6 = document.forms.f6;
	if(f6.checkValidity()){
		e.preventDefault();
		listFuncOl(); 
		olListNull()
}
}
function multiFunc3(e){ 
	let f7 = document.forms.f7;
	if(f7.checkValidity()){
		e.preventDefault();
		listFuncUl(); 
		ulListNull()
}
}

createBut.onclick = multiFunc;
createBut2.onclick = multiFunc2;
createBut3.onclick = multiFunc3;



function tableFunc(){
	//Створюєм і задаєм всі властивості таблиці
	txtSpace.value +=`<table style="border:${borderWidth.value}px ${borderType.value} ${borderColor.value}">`;
	
		for(let i=0; i<rowCount.value; i++){
			txtSpace.value+="<tr>";
			
			for(let j=0; j<cellCount.value;j++){
				txtSpace.value +=`<td style="border:1px solid black; width:${cellWidth.value}px; height:${cellHeight.value}px">Text</td>`;
			}
			
			txtSpace.value +="</tr>";
	}
	
	txtSpace.value +="</table>";
}


function listFuncUl(){
	// create list
	var tom = document.getElementById('typeOfMark');	
	var ulListItems = document.getElementById('ulListItems');
	
	txtSpace.value +=`<ul type=${tom.value}>`;
	
	for (var i = 1;i <= ulListItems.value;i++){
		txtSpace.value+=`<li>text</li>`;
	}
		txtSpace.value+="</ul>";
}
function listFuncOl(){
	// create list
	var tomOl = document.getElementById('typeOfMarkOlList');	
	var olListItems = document.getElementById('olListItems');
	
	txtSpace.value +=`<ol ${tomOl.value}>`;
	
	for (var i = 1;i <= olListItems.value;i++){
		txtSpace.value+=`<li>text</li>`;
	}
		txtSpace.value+="</ol>";
}

//// відображаєм list або table
var tableList = document.getElementById('tableList');
var listList = document.getElementById('listList');



var f3 = document.forms.f3;

	f3.elements[0].onclick=function(){
		listList.style.display='none';
		tableList.style.display='block';
		
		
	}
	
	f3.elements[1].onclick=function(){
		listList.style.display='block';
		tableList.style.display='none';
	}

	
	
var blockButton = document.getElementById('blockButton');	

var password = 1111;

var modalWindow = document.getElementById('modalWindow');


var btn = document.getElementById("myBtn");


blockButton.onclick = function() {
  modalWindow.style.display = "block";
	html.style.overflow='hidden';
}

let subPas = document.getElementById('subPas');
	let pas = document.getElementById('pas');
	let error = document.getElementById('error');
	
	subPas.addEventListener('click', function(){
		if(pas.value!=password){
			error.style.display='block';
			
			pas.value='';
		}
		else{
			modalWindow.style.display='none';
			pas.value='';
			error.style.display='none';
		}
	})

let ul = document.getElementById('ul');
let ol= document.getElementById('ol');

let f5 = document.forms.f5;

	f5.elements[1].onclick=function(){
		ul.classList.toggle('show');
		ol.classList.remove('show');
		
	}
	
	f5.elements[2].onclick=function(){
		ol.classList.toggle('show');
		ul.classList.remove('show');
	}