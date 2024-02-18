
const start_game = () => {
    hii.classList.remove("hhh");
    document.getElementById("welcome").style.display = "none";
    multi_player();
}
const play_comp = () => {
    hii.classList.remove("hhh");
    document.getElementById("welcome").style.display = "none";
    // enable_btn();

    comp_player();
}
const reset = () => {
    turn_o = true;
    enable_btn();
    msg_container.classList.add("hide");
}

let hii = document.querySelector(".all");
let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#bbb");
let newgame_btn = document.querySelector("#new_btn");
// let main_game=document.querySelector(".container");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#winner");
let start_btn = document.querySelector("#Start");
let comp_btn = document.querySelector("#Comp");
// let count=0;


let turn_o = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count = 0;

multi_player = () => {

    console.log("entered_1")
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box is clicked");
            
            if (turn_o) {
                box.innerHTML = `<img src="images/tic-transformed.png" alt="X">`;
                turn_o = false;
            } else {
                box.innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                turn_o = true;
            }
            box.disabled = true;
            count += 1;
            console.log(count);
            checkwinner(count);

        }
        )
    }
    );
}
comp_player = () => {
    console.log("entered_2")
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box is clicked");
            
            if (turn_o) {
                box.innerHTML = `<img src="images/tic-transformed.png" alt="X">`;
                console.log("yyy", box.innerHTML);
                // box.innerText = "X";
                // box.classList.add('disabled');
                box.disabled = true;
                // checkwinner(count)
                count+=1;
                // turn_o = false;
                let loop_count = 0
                for (let pa of winpattern) {
                    loop_count += 1;
                    console.log(pa[0], pa[1], pa[2]);
                    // console.log(boxes[pa[0]].innerHTML,boxes[pa[1]].innerHTML, boxes[pa[2]].innerHTML);

                    let po_1 = boxes[pa[0]].innerHTML;
                    let po_2 = boxes[pa[1]].innerHTML;
                    let po_3 = boxes[pa[2]].innerHTML;
                    console.log(po_1, po_2, po_3);
                    if ((po_1 != "" && po_2 != "" && po_1 == po_2)) {
                        if (boxes[pa[2]].disabled != true) {
                            boxes[pa[2]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                            // console.log(po_3)
                            boxes[pa[2]].disabled = true;
                            console.log("111111");
                            count+=1;
                            break;
                        }
                        // continue;
                        // boxes[pa[2]].disabled=true
                    } if ((po_2 != "" && po_3 != "" && po_2 == po_3)) {
                        if (boxes[pa[0]].disabled != true) {
                            boxes[pa[0]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                            boxes[pa[0]].disabled= true;
                            console.log("222222");
                            count+=1;
                            break;
                        }
                    } if ((po_1 != "" && po_3 != "" && po_1 == po_3)) {
                        if (boxes[pa[1]].disabled != true) {
                            boxes[pa[1]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                            boxes[pa[1]].disabled = true;
                            console.log("33333")
                            count+=1;
                            break;
                        }
                    } if (loop_count == 8) {
                        for (let i of winpattern) {
                            let p_1 = boxes[i[0]].innerHTML;
                            let p_2 = boxes[i[1]].innerHTML;
                            let p_3 = boxes[i[2]].innerHTML;
                            if (p_1 == "") {
                                boxes[i[0]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                                boxes[i[0]].disabled = true;
                                count+=1;
                                break;
                            } else if (p_2 == "") {
                                boxes[i[1]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                                boxes[i[1]].disabled = true;
                                count+=1;
                                break;
                            } else if (p_3 == "") {
                                boxes[i[2]].innerHTML = `<img src="images/tac-transformed.png" alt="Y">`;
                                boxes[i[2]].disabled = true;
                                count+=1;
                                break;
                            }
                        }
                    }
                }
                
                console.log("countaaaaaaaa");
                console.log(count);
                checkwinner(count);
            }
            turn_o = true;
            // box.disabled = true;
            // count += 1;
            console.log(count);
            // checkwinner(count);

        }
        )
    }
    );
}

const enable_btn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disable_btn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    disable_btn();
    msg.innerText = `Congratulation, ${winner}`;
    msg_container.classList.remove("hide");
}
const checkwinner = (co) => {
    let win = false;
    for (let pattern of winpattern) {
        
        let pos_1 = boxes[pattern[0]].innerHTML;
        let pos_2 = boxes[pattern[1]].innerHTML;
        let pos_3 = boxes[pattern[2]].innerHTML;
        if (pos_1 != "" && pos_2 != "" && pos_3 != "") {
            if (pos_1 == pos_2 && pos_2 == pos_3) {
                win = true;
                count = 0;
                if (pos_1 == `<img src="images/tic-transformed.png" alt="X">`) {
                    let a = "Winner is player 1";
                    showwinner(a);
                } else {
                    let b = "Winner is player 2";
                    showwinner(b);
                }
            }
        }

    }
    if (co == 9 && win == false) {
        count = 0;
        let c = "Match draw";
        showwinner(c);
    }
};
newgame_btn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
start_btn.addEventListener("click", start_game);
comp_btn.addEventListener("click", play_comp);
