document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap modal windows
    const modalWindowOne = new bootstrap.Modal(document.getElementById("card1"));
    const scholarshipWindow = new bootstrap.Modal(document.getElementById("scholarship_modal_window"));

    // buttons
    const scholarshipBtn = document.getElementById('scholarship_btn');
    const cancelScholarshipBtn = document.querySelectorAll('.cancel_scholarship');
    const applyScholarShipBtn = document.getElementById('apply_scholarship_btn');
    const addToCartBtnOne = document.getElementById('add_to_cart_btn_one');
    // Even listener for buttons
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

});
