AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",(e)=>{
            console.log("Marker is found")
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost",(e)=>{
            console.log("Marker is lost")
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex"

        var ORDER_SUMMARY_Button=document.getElementById("summary-button")
        var orderButton=document.getElementById("order-button")

        ORDER_SUMMARY_Button.addEventListener("click",function(){
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work in progress"
            })
        })

        orderButton.addEventListener("click",function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Order!",
                text: "Your order will be come soon!",
                timer:2000,
                buttons:false
            })
        })
    },
    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"

        
    },
})