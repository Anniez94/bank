import * as yup from "yup";

const amountRegExp =new RegExp(/^(?:\d*\.\d{1,2}|\d+)$/);
const accountNumberReg = new RegExp(/^\d+$/);

const transferSchema = yup.object({
    accountNumber: yup.string().required("Account Number is required").matches(accountNumberReg, 'Account Number is not valid').test('len', 'Account Number should be exactly 10 digits', val => { if(val) return val.toString().length === 10}),
    pin: yup.string().required("Pin is required").test('len', 'Pin should be exactly 4 digits', val => {if(val) return val.toString().length === 4}),
    bank: yup.string().required("Bank Account is required"),
    amount: yup.string().required("Amount is required").matches(amountRegExp, 'Amount is not valid').test('len', 'Amount cannot be less than 50', val => val > 50)

});


export {transferSchema}
