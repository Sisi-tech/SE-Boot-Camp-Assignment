document.addEventListener('DOMContentLoaded', function() {
    // modal window 1
    // Initialize Bootstrap modal windows
    const modalWindowOne = new bootstrap.Modal(document.getElementById("card1"));
    const scholarshipWindow = new bootstrap.Modal(document.getElementById("scholarship_modal_window"));

    // buttons
    const scholarshipBtn = document.getElementById('scholarship_btn');
    const cancelScholarshipBtn = document.querySelectorAll('.cancel_scholarship');
    const applyScholarShipBtn = document.getElementById('apply_scholarship_btn');
    const addToCartBtnOne = document.getElementById('add_to_cart_btn_one');
    // Event listener for buttons
    scholarshipBtn.addEventListener('click', function() {
        if (modalWindowOne) {
            modalWindowOne.hide();
        }
        if (scholarshipWindow) {
            scholarshipWindow.show();
        }
    });

    cancelScholarshipBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            if (scholarshipWindow) {
                scholarshipWindow.hide();
            }
            if (modalWindowOne) {
                modalWindowOne.show();
            }
        });
    });
    // apply scholarship 
    applyScholarShipBtn.addEventListener('click', function(e) {
        const form = document.getElementById('scholarship_form');
        if (!form.checkValidity()) {
            e.preventDefault();
            window.alert('Please fill out all required fields');
        } else {
            if (scholarshipWindow) {
                scholarshipWindow.hide();
            }
            if (modalWindowOne) {
                modalWindowOne.hide();
            }
            window.alert("Introduction to Software Engineering program has been submitted with scholarship successfully!")
        }
        
    });
    // add to cart
    addToCartBtnOne.addEventListener('click', function() {
        window.alert("Introduction to Software Engineering program has been added to your cart.");
    });

    // modal window 2
    const modalTwo = new bootstrap.Modal(document.getElementById('card_two'));
    const scholarshipWindowTwo = new bootstrap.Modal(document.getElementById('scholarship_modal_window_two'))
    const videoTwo = document.querySelector('.model_two_video');

    modalTwo._element.addEventListener('show.bs.modal', function() {
        videoTwo.play();
    });
    modalTwo._element.addEventListener('hidden.bs.modal', function() {
        videoTwo.pause();
    })

    // btn 
    const addToCartBtnTwo = document.getElementById('add_to_cart_btn_two');
    const ScholarshipBtnTwo = document.getElementById('scholarship_btn_two');
    const applyScholarshipBtnTwo = document.getElementById('apply_scholarship_btn_two');
    const cancelScholarshipBtnTwo = document.querySelectorAll('.cancel_scholarship_btn_two');

    // event listener 
    ScholarshipBtnTwo.addEventListener('click', function() {
        if (modalTwo) {
            modalTwo.hide();
        }
        if (scholarshipWindowTwo) {
            scholarshipWindowTwo.show();
        }
    });
    cancelScholarshipBtnTwo.forEach(btn => {
        btn.addEventListener('click', function() {
            if (scholarshipWindowTwo) {
                scholarshipWindowTwo.hide();
            }
            if (modalTwo) {
                modalTwo.show();
            }
        });
    });
    applyScholarshipBtnTwo.addEventListener('click', function(e) {
        const form = document.getElementById('scholarship_form_two');
        if (!form.checkValidity()) {
            e.preventDefault();
            window.alert('please fill out all required fields');
        } else {
            if (scholarshipWindowTwo) {
                scholarshipWindowTwo.hide();
            }
            if (modalTwo) {
                modalTwo.hide();
            }
            window.alert("Introduction to JavaScript Fundamentals program has been submitted with scholarship successfully!")
        }
    });

    // add to cart
    addToCartBtnTwo.addEventListener('click', function() {
        window.alert("Introduction to JavaScript Fundamentals  program has been added to your cart.");
    })

    // modal window 3
    const modalThree = new bootstrap.Modal(document.getElementById('card_three'));
    const scholarshipWindowThree = new bootstrap.Modal(document.getElementById('scholarship_modal_window_three'))
    const video = document.querySelector('.model_three_video');

    modalThree._element.addEventListener('show.bs.modal', function() {
        video.play();
    });
    modalThree._element.addEventListener('hidden.bs.modal', function() {
        video.pause();
    })

    // btn 
    const addToCartBtnThree = document.getElementById('add_to_cart_btn_three');
    const ScholarshipBtnThree = document.getElementById('scholarship_btn_three');
    const applyScholarshipBtnThree = document.getElementById('apply_scholarship_btn_three');
    const cancelScholarshipBtnThree = document.querySelectorAll('.cancel_scholarship_btn_three');

    // event listener 
    ScholarshipBtnThree.addEventListener('click', function() {
        if (modalThree) {
            modalThree.hide();
        }
        if (scholarshipWindowThree) {
            scholarshipWindowThree.show();
        }
    });
    cancelScholarshipBtnThree.forEach(btn => {
        btn.addEventListener('click', function() {
            if (scholarshipWindowThree) {
                scholarshipWindowThree.hide();
            }
            if (modalThree) {
                modalThree.show();
            }
        });
    });
    applyScholarshipBtnThree.addEventListener('click', function(e) {
        const form = document.getElementById('scholarship_form_three');
        if (!form.checkValidity()) {
            e.preventDefault();
            window.alert('please fill out all required fields');
        } else {
            if (scholarshipWindowThree) {
                scholarshipWindowThree.hide();
            }
            if (modalThree) {
                modalThree.hide();
            }
            window.alert("Introduction to JavaScript Fundamentals program has been submitted with scholarship successfully!")
        }
    });

    // add to cart
    addToCartBtnThree.addEventListener('click', function() {
        window.alert("Introduction to JavaScript Fundamentals  program has been added to your cart.");
    })
});
