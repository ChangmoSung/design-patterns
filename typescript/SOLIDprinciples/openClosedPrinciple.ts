// // Open Closed Principle (OCP)
// // This pattern can be used to replace "if statements"
// // Software entities (classes, modules, functions, etc) should be open
// // for extension, but closed for modification

// // Open for extension:
// // The behaviour of the software entity can be extended to add new features or behaviour

// // Closed for modification:
// // Once the software entity is developed and it has been reviewed and tested,
// // the code should not be touched to correct the software behaviour

// // 1. Reduced Risk of Bugs - Existing code isn't modified
// // so new features don't introduce bugs to existing functionality
// // 2. Increased Code Reusability - Components can be reused independently for modular design
// // 3. Simplified Versioning and Patching - New features are isolated to new components

// interface Customer {
//   giveDiscount(): number;
//   addLoyaltyPoints(amountSpent: number): number;
// }

// class RegularCustomer implements Customer {
//   giveDiscount(): number {
//     return 10;
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent;
//   }
// }

// class PremiumCustomer implements Customer {
//   giveDiscount(): number {
//     return 20;
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent * 2;
//   }
// }

// class GoldCustomer implements Customer {
//   giveDiscount(): number {
//     return 30;
//   }
//   addLoyaltyPoints(amountSpent: number): number {
//     return amountSpent * 3;
//   }
// }

// class Discount {
//   giveDiscount(customer: Customer) {
//     return customer.giveDiscount();
//   }
// }

// const premiumCustomer: PremiumCustomer = new PremiumCustomer();
// const goldCustomer: GoldCustomer = new GoldCustomer();
// const discount: Discount = new Discount();

// const discountForPremiumCustomer = discount.giveDiscount(premiumCustomer);
// console.log("discountForPremiumCustomer", discountForPremiumCustomer);
// const discountForGoldCustomer = discount.giveDiscount(goldCustomer);
// console.log("discountForGoldCustomer", discountForGoldCustomer);
