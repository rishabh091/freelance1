import { StarRating } from "./enums/orders.enum";
import { MenuItem, MenuSubGroup, MenuGroup, ResturantMenuItems, ResturantMenuItemGroups} from "./interface/interface";


export const  MockResturantMenus : ResturantMenuItems = {};
export const MockMenuGroups : ResturantMenuItemGroups = {};
MockResturantMenus[0] = [	 
	{ItemID:0,  Price : 250, ItemName: 'Kseri Bath',   	    ItemType: "veg", 	    Discount:20, 	AvailableNow:false, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 250, ItemName: 'Chow chow bath',   	ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 250, ItemName: 'Lamb Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 250, ItemName: 'Tomato Soup', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 250, ItemName: 'Pork Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 250, ItemName: 'Chicken Manchuri',	ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:6,  Price : 250, ItemName: 'Chicken 65',			ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:7,  Price : 250, ItemName: 'Lemon Chicken',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:8,  Price : 250, ItemName: 'Chicken Manchuri',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:9,  Price : 250, ItemName: 'Pork Manchuri',		ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:10, Price : 250, ItemName: 'Ginger Bread Rost',	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:11, Price : 250, ItemName: 'Crsipy Corn',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:12, Price : 250, ItemName: 'Penut Masala',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:13, Price : 250, ItemName: 'Gobi Fry',			ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:14, Price : 250, ItemName: 'BabyCorn Fry',		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:15, Price : 250, ItemName: 'Penut Fry',			ItemType: "vegan", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:16, Price : 250, ItemName: 'Fried Egg',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:17, Price : 250, ItemName: 'Sunsude Top',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:18, Price : 250, ItemName: 'Scrambled Egg',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:19, Price : 250, ItemName: 'Egg Burgi',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:20, Price : 250, ItemName: 'Wheat Bear', 		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 250, ItemName: 'Belgium Bear',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 250, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 250, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[0] = [
	{SubGroupID: 0, SubGroupName: 'Soup',   		 FoodItemsIDs: 	  [0,1,2,3],   			},
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [4,5,6,7,8], 			},
	{SubGroupID: 2, SubGroupName: 'Crispy Starter',  FoodItemsIDs:    [9,10,11,12,13,14], 	},
	{SubGroupID: 3, SubGroupName: 'Egg Items',		 FoodItemsIDs:    [15,16,17,18,19], 		},
	{SubGroupID: 4, SubGroupName: 'Beer',		 	 FoodItemsIDs:    [20, 21], 				},
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];


MockResturantMenus[1] = [
	{ItemID:0,  Price : 350, ItemName: 'macroni',   	        ItemType: "veg", 	      Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 350, ItemName: 'veg biryani',   	    ItemType: "veg", 	      Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 350, ItemName: 'lung fung Soup',     ItemType: "nonveg",   	  Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 350, ItemName: 'veg mochow', 		ItemType: "veg",          Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 350, ItemName: 'chicken mochow',  	ItemType: "nonveg",   	  Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 350, ItemName: 'dum birayni',	    ItemType: "nonveg", 	  Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:6,  Price : 350, ItemName: 'Long Iceland',		ItemType: "alcholic",     Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:7,  Price : 350, ItemName: 'Masala Lemonade',	    ItemType: "nonalcholic",  Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:8,  Price : 350, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic",  Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[1] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			    },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [7,8], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [8], 			    }
];

MockResturantMenus[2] = [
	 
	{ItemID:0,  Price : 450, ItemName: 'Kseri Bath',   	    ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 450, ItemName: 'Chow chow bath',   	ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 450, ItemName: 'Lamb Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 450, ItemName: 'Tomato Soup', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 450, ItemName: 'Pork Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 450, ItemName: 'Chicken Manchuri',	ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:6,  Price : 450, ItemName: 'Chicken 65',			ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:7,  Price : 450, ItemName: 'Lemon Chicken',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:8,  Price : 450, ItemName: 'Chicken Manchuri',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:9,  Price : 450, ItemName: 'Pork Manchuri',		ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:10, Price : 450, ItemName: 'Ginger Bread Rost',	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:11, Price : 450, ItemName: 'Crsipy Corn',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:12, Price : 450, ItemName: 'Penut Masala',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:13, Price : 450, ItemName: 'Gobi Fry',			ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:14, Price : 450, ItemName: 'BabyCorn Fry',		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:15, Price : 450, ItemName: 'Penut Fry',			ItemType: "vegan", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:16, Price : 450, ItemName: 'Fried Egg',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:17, Price : 450, ItemName: 'Sunsude Top',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:18, Price : 450, ItemName: 'Scrambled Egg',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:19, Price : 450, ItemName: 'Egg Burgi',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:20, Price : 450, ItemName: 'Wheat Bear', 		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 450, ItemName: 'Belgium Bear',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 450, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 450, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[2] = [
	{SubGroupID: 0, SubGroupName: 'Soup',   		 FoodItemsIDs: 	  [0,1,2,3],   			},
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [4,5,6,7,8], 			},
	{SubGroupID: 2, SubGroupName: 'Crispy Starter',  FoodItemsIDs:    [9,10,11,12,13,14], 	},
	{SubGroupID: 3, SubGroupName: 'Egg Items',		 FoodItemsIDs:    [15,16,17,18,19], 		},
	{SubGroupID: 4, SubGroupName: 'Beer',		 	 FoodItemsIDs:    [20, 21], 				},
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];


MockResturantMenus[3] = [
	 
	{ItemID:0,  Price : 550, ItemName: 'macroni',   	       ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 550, ItemName: 'veg biryani',   	   ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 550, ItemName: 'lung fung Soup',     ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 550, ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 550, ItemName: 'chicken mochow',  	ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 550, ItemName: 'dum birayni',	    ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 550, ItemName: 'Long Iceland',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 550, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 550, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[3] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			   },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [21,22], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];

MockResturantMenus[4] = [
	 
	{ItemID:0,  Price : 650, ItemName: 'Kseri Bath',   	    ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 650, ItemName: 'Chow chow bath',   	ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 650, ItemName: 'Lamb Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 650, ItemName: 'Tomato Soup', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 650, ItemName: 'Pork Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 650, ItemName: 'Chicken Manchuri',	ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:6,  Price : 650, ItemName: 'Chicken 65',			ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:7,  Price : 650, ItemName: 'Lemon Chicken',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:8,  Price : 650, ItemName: 'Chicken Manchuri',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:9,  Price : 650, ItemName: 'Pork Manchuri',		ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:10, Price : 650, ItemName: 'Ginger Bread Rost',	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:11, Price : 650, ItemName: 'Crsipy Corn',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:12, Price : 650, ItemName: 'Penut Masala',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:13, Price : 650, ItemName: 'Gobi Fry',			ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:14, Price : 650, ItemName: 'BabyCorn Fry',		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:15, Price : 650, ItemName: 'Penut Fry',			ItemType: "vegan", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:16, Price : 650, ItemName: 'Fried Egg',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:17, Price : 650, ItemName: 'Sunsude Top',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:18, Price : 650, ItemName: 'Scrambled Egg',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:19, Price : 650, ItemName: 'Egg Burgi',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:20, Price : 650, ItemName: 'Wheat Bear', 		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 650, ItemName: 'Belgium Bear',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 650, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 650, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[4] = [
	{SubGroupID: 0, SubGroupName: 'Soup',   		 FoodItemsIDs: 	  [0,1,2,3],   			},
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [4,5,6,7,8], 			},
	{SubGroupID: 2, SubGroupName: 'Crispy Starter',  FoodItemsIDs:    [9,10,11,12,13,14], 	},
	{SubGroupID: 3, SubGroupName: 'Egg Items',		 FoodItemsIDs:    [15,16,17,18,19], 		},
	{SubGroupID: 4, SubGroupName: 'Beer',		 	 FoodItemsIDs:    [20, 21], 				},
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];



MockResturantMenus[5] = [
	 
	{ItemID:0,  Price : 750, ItemName: 'macroni',   	       ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 750, ItemName: 'veg biryani',   	   ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 750, ItemName: 'lung fung Soup',     ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 750, ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 750, ItemName: 'chicken mochow',  	ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 750, ItemName: 'dum birayni',	    ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 750, ItemName: 'Long Iceland',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 750, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 750, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[5] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			   },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [21,22], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];

MockResturantMenus[6] = [
	 
	{ItemID:0,  Price : 850, ItemName: 'Kseri Bath',   	    ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 850, ItemName: 'Chow chow bath',   	ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 850, ItemName: 'Lamb Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 850, ItemName: 'Tomato Soup', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 850, ItemName: 'Pork Soup',  		ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 850, ItemName: 'Chicken Manchuri',	ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:6,  Price : 850, ItemName: 'Chicken 65',			ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:7,  Price : 850, ItemName: 'Lemon Chicken',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:8,  Price : 850, ItemName: 'Chicken Manchuri',  	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:9,  Price : 850, ItemName: 'Pork Manchuri',		ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:10, Price : 850, ItemName: 'Ginger Bread Rost',	ItemType: "nonveg", 	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:11, Price : 850, ItemName: 'Crsipy Corn',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:12, Price : 850, ItemName: 'Penut Masala',  		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:13, Price : 850, ItemName: 'Gobi Fry',			ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:14, Price : 850, ItemName: 'BabyCorn Fry',		ItemType: "vegan", 	    Discount:15, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:15, Price : 850, ItemName: 'Penut Fry',			ItemType: "vegan", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:16, Price : 850, ItemName: 'Fried Egg',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:17, Price : 850, ItemName: 'Sunsude Top',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:18, Price : 850, ItemName: 'Scrambled Egg',		ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:19, Price : 850, ItemName: 'Egg Burgi',			ItemType: "egg", 		Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:20, Price : 850, ItemName: 'Wheat Bear', 		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 850, ItemName: 'Belgium Bear',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 850, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 850, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[6] = [
	{SubGroupID: 0, SubGroupName: 'Soup',   		 FoodItemsIDs: 	  [0,1,2,3],   			},
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [4,5,6,7,8], 			},
	{SubGroupID: 2, SubGroupName: 'Crispy Starter',  FoodItemsIDs:    [9,10,11,12,13,14], 	},
	{SubGroupID: 3, SubGroupName: 'Egg Items',		 FoodItemsIDs:    [15,16,17,18,19], 		},
	{SubGroupID: 4, SubGroupName: 'Beer',		 	 FoodItemsIDs:    [20, 21], 				},
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];


MockResturantMenus[7] = [
	 
	{ItemID:0, Price : 950,  ItemName: 'macroni',   	       ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1, Price : 950,   ItemName: 'veg biryani',   	   ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2, Price : 950,   ItemName: 'lung fung Soup',     ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3, Price : 950,   ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4, Price : 950,   ItemName: 'chicken mochow',  	ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5, Price : 950,   ItemName: 'dum birayni',	    ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 950,  ItemName: 'Long Iceland',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 950,  ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23,  Price : 950, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[7] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			   },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [21,22], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];

MockResturantMenus[8] = [
	 
	{ItemID:0, Price : 1050, ItemName: 'idli',   	        ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1, Price : 1050, ItemName: 'vada',   	        ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},	
	{ItemID:3, Price : 1050, ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 1050, ItemName: 'tea',			    ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 1050, ItemName: 'cofee',				ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[8] = [
	{SubGroupID: 0, SubGroupName: 'idli',   		 FoodItemsIDs: 	  [0,1],   			   },
	{SubGroupID: 1, SubGroupName: 'bath', 		     FoodItemsIDs:    [3], 			},
	{SubGroupID: 2, SubGroupName: 'beverages',  		 FoodItemsIDs:    [22,23], 					}
	
];

MockResturantMenus[9] = [
	 
	{ItemID:0,  Price : 1150, ItemName: 'macroni',   	       ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1,  Price : 1150, ItemName: 'veg biryani',   	   ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2,  Price : 1150, ItemName: 'lung fung Soup',     ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3,  Price : 1150, ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4,  Price : 1150, ItemName: 'chicken mochow',  	ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5,  Price : 1150, ItemName: 'dum birayni',	    ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 1150, ItemName: 'Long Iceland',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 1150, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 1150, ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[9] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			   },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [21,22], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				}
];
MockResturantMenus[10] = [
	 
	{ItemID:0, Price : 1250, ItemName: 'macroni',   	       ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:1, Price : 1250, ItemName: 'veg biryani',   	   ItemType: "veg", 	    Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:2, Price : 1250,  ItemName: 'lung fung Soup',     ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:3, Price : 1250, ItemName: 'veg mochow', 		ItemType: "veg",      	Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date() , DisplayImagePath:"../assets/images/menuitem1.png", Rating:StarRating.ThreeStar},
	{ItemID:4, Price : 1250, ItemName: 'chicken mochow',  	ItemType: "nonveg",   	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:5, Price : 1250, ItemName: 'dum birayni',	    ItemType: "nonveg", 	Discount:10, 	AvailableNow:true, NextAvailableTime: new Date(),   DisplayImagePath:'../assets/images/menuitem1.png', Rating:StarRating.ThreeStar},
	{ItemID:21, Price : 1250, ItemName: 'Long Iceland',		ItemType: "alcholic",   Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:22, Price : 1250, ItemName: 'Masala Lemonade',	ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar},
	{ItemID:23, Price : 1250,ItemName: 'Virgin Mogito',		ItemType: "nonalcholic", Discount:0, 	AvailableNow:true, NextAvailableTime:  new Date(),  DisplayImagePath:'img/1.png', Rating:StarRating.ThreeStar}
];
MockMenuGroups[10] = [
	{SubGroupID: 0, SubGroupName: 'italian',   		 FoodItemsIDs: 	  [0],   			   },
	{SubGroupID: 1, SubGroupName: 'Chinese', 		 FoodItemsIDs:    [1,2,3,4], 			},
	{SubGroupID: 2, SubGroupName: 'biryani',  		 FoodItemsIDs:    [5], 					},
	{SubGroupID: 3, SubGroupName: 'cocktail',		 FoodItemsIDs:    [21,22], 		        },	
	{SubGroupID: 5, SubGroupName: 'Refreshers',		 FoodItemsIDs:    [22, 23], 				},
	{SubGroupID: 5, SubGroupName: 'Search Result',   FoodItemsIDs: [] }
];