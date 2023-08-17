// There are three selectors in JQuery
//  1-> Element Selector   // Select Element By Tag Name
//  2-> Class Selector     // Select Class By " . "
//  3-> Id Selector        // Select Id By " # "

// There are also psedo classes in JQyery like
//  1-> :first
//  2-> :second
//  3-> :even
//  4-> :odd

// This Keyword
// This Keyword is used to identify what's the property is used in the selected selctor


// $(document).ready(function () {
//     console.log('We are using JQuery');
// $('p:first').click(function () {
//     console.log('This is the Body1',this); 
//     $('p:first').hide();
// })
//     $('#para1').click(function () {
//         console.log('This is the Body2');
//         $('#para1').hide();
//     })
//     $('.para2').click(function () {
//         console.log('This is the Body3');
//         $('.para2').hide();
//     })
//     $('#para3').click(function () {
//         console.log('This is the Body4');
//         $('#para3').hide();
//     })
// })
// console.log("I am Learning JQuery now."); 




// Events in JQuery 
// There are many events in JQuery but the most important are given below:-

// 1->  Mouse Events = click , dblclick , mouseenter , mouseleave , mousemove
// 2->  KeyBoard Events = keypress , keydown , MediakeystatusMap
// 3->  From Events = submit , change , focus , blur
// 4->  Documet/Window Events = load ,  resize , scroll , unload



// Mouse Events
// $(document).ready(function(){

//     console.log("I am learning JQuery")

//     //  Single Click
//     $('#para1').click(function(){
//         console.log('I click on Body 2');
//     })

//     // Double click
//     $('.para').dblclick(function(){
//         console.log('I dblclick on Body 1');
//     })

//     // Mouse Enter
//     $('.para2').mouseenter(function(){
//         console.log('Hey There I am enter');
//     })

//     // Mouse Leave
//     $('#para3').mouseleave(function(){
//         console.log('Hey! I am Leave');
//     })

//     // Mouse Move
//     $('#para1').mousemove(function(){
//         console.log('Hey!There i am moving');
//     })

// })

// On keyword =>   In one keyword we apply multiple function or events in one id or class

// $(document).ready(function () {
//     $('.para').on(
//         {
//             click: function () {
//                 console.log("Thanks for clicking", this);
//             },

//         mouseleave: function(){
//             console.log('Congratulations! The mouse leave');
//         }
//         }
//     )
// })


// Hide or show in JQuery

// $(document).ready(function(){
//     $('.dummy').hide(1000, function(){
//         console.log('Hello i am hidden.');
//     })
//     $('.dummy').show(1000,function(){
//         console.log('Hello now i am show');
//     })
// });


// Toggle in JQuery

// 1-> fadein():
// 2-> fadeout();
// 3-> fadetoggle();
// 4-> fadeto();
// $(document).ready(function () {
//     $('#button').click(function () {
//         $('.dummy').fadeToggle();
//         $('.dummy').toggle()
//     });
// });


// Slides in JQuery
// 1-> Slide Up
// 2-> Slide Down
// 3-> Slide Toggle

// $(document).ready(function(){
//     $('.dummy').slideUp(1000)
// })
