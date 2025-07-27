 export const displayRazorpay = async (totalcartamount, deliveryCharge, navigate) => {

    const isLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!isLoaded) {
        alert("Razorpay SDK failed to load.");
        return;
    }

    const amountInPaise = Math.round((totalcartamount + deliveryCharge) * 100);

    const options = {
        key: "rzp_test_nxa1aICGoMspYK",
        amount: amountInPaise,
        currency: "INR",
        name: "Shop It",
        description: "Thank you for shopping with us.",
        handler: function (response) {
            console.log("Payment ID:", response.razorpay_payment_id);
            navigate("/");
        }
    };

    if (!window.Razorpay) {
        alert("Razorpay SDK not available.");
        return;
    }
    const rzp = new window.Razorpay(options);
    rzp.open();
}

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};
