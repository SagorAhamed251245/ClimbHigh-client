import OrderApi from "../../api/OrderApi";

const PaymentHistory = () => {
    const [payments] = OrderApi()
    console.log(payments);
    return (
        <div className="text-white">
            <h1>This is payment history</h1>
        </div>
    );
};

export default PaymentHistory;