import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div id="about" class="about-container">
                <div class="row">
                    <div class="about-text col-12 ">
                        <h1 class="text-center" >About Us</h1>
                        <p class="text-center">Shoe Store is a shoe-fitting store.
                        We specialize in shoes for children and comfort shoes for adults, but our real specialty is service. Shoe buying isn't
                        just a transaction, but an important decision that will affect your daily health and well-being.
                        We have experience and knowledge to help with your selection of footwear. We help customers on a one to one basis,
                        getting to know your needs so that we can recommend the products that will benefit you the most.
                        Old fashioned shoe-fitting and a dedication to service have kept Shoe Store a Dayton destination for more than 100 years.
                         We enjoy what we do and we think it shows!</p>
                    </div>
                </div>
                <hr class="divider my-4" />
            </div>

        )
    }
}

export default About