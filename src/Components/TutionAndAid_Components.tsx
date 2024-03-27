import React from 'react'

const TutionAndAid_Components = () => {
    return (
        <>
            <div className='container'>
                <p>For YYGS Residential students, the full program tuition for one, 2-week session is $6,500 USD.
                    <br /><br />
                    Please note that tuition covers all on-campus components of the program (housing, meals, curriculum materials, etc.), but travel is not covered due to our program size and the legal and logistical limitations of working with globally diverse families.
                    <br /><br />
                    YYGS offers Need-Based Financial Aid (covering up to the full cost of tuition) for all domestic and international students, and then all students coordinate and pay/fundraise to cover their transportation needs.</p>
            </div>

            <div className='container'>
                <h2>Payment Deadlines</h2>
                <p>Full tuition payment is due on January 4, 2024 for Early Action admits, and March 15, 2024 for Regular Decision admits.</p>
                <p>Tuition fees are paid using a payment gateway, since YYGS uses external payment processors to accommodate both domestic and international applicants. Tuition payments can be subject to processing fees by the external payment processor (Slate or FlyWire). Students can access this gateway by logging into their application, which will direct them to the Application Status page.</p>
                <table>
                    <tr>
                        <td>For domestic applicants</td>
                        <td>or anyone wishing to make payment in USD, including eChecks from U.S. bank account, or Visa, MasterCard, Discover, or American Express credit or debit cards, our application will automatically route you to pay through Slate as the payment processor.</td>
                    </tr>
                    <br />
                    <tr>
                        <td>For international applicants</td>
                        <td>or anyone wishing to make payment in foreign currency, including bank wire, foreign credit or debit cards, and other native options, like Alipay and UnionPay, our application will automatically route you to pay through Flywire as the payment processor.</td>
                    </tr>
                    <br />
                </table>
            </div>
        </>
    )
}

export default TutionAndAid_Components