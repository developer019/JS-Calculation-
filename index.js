<script type="text/javascript">

  "use strict";

  const flag           = true;    //Set flag
  const perPostCost    = 3;      //Minimum amount for every post
  const completedCycle = 57;    //Counting complete post 
  const depositeAmount = 171;  //Deposited amount, Min limit $1
  
  if(depositeAmount < 85){
      console.log('Balance should be minimum $1');
  }else{  
   if(completedCycle * perPostCost > depositeAmount){
     console.log('Your balance is low. Please recharge now!');
    }else{
      if(flag){
        if(completedCycle){
            const totalCost   = completedCycle * perPostCost; //Get amount of per post with completed cycle
             const currBalance = depositeAmount - completedCycle * perPostCost; //Get Current Balance
              console.log(
                " Deposited Amount   = " + depositeAmount
                + " Tk   \n Total post created = " + completedCycle
                + " Post \n Per post charge    = " + perPostCost
                + " Tk   \n Total cost         = " + totalCost
                + " Tk   \n Current balance    = " + currBalance + " Tk"
            ); 
         }
       }
    }
    if(completedCycle == 0){
     console.log('Please create new post!'); //When post is 0
  }
}
</script>
