import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { UiModule } from './ui/ui.module';
import { SliderModule } from 'angular-image-slider';
import { TrackComponent } from './track/track.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ChatService } from './chat.service';
import { ChatModule } from './chat/chat.module';
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { SortService } from './products/sort/sort.service';
import { CardService } from './servicelayer/card/card.service';
import { ProductImage } from './pojo/productimage';
import { ProductimageService } from './servicelayer/productimage/productimage.service';
import { CartproductService } from './servicelayer/cartproduct/cartproduct.service';
import { CartService } from './servicelayer/cart/cart.service';
import { AddressService } from './servicelayer/address/address.service';
import { FeedbackService } from './servicelayer/feedback/feedback.service';
import { InvoiceService } from './servicelayer/invoice/invoice.service';
import { CouponService } from './servicelayer/coupon/coupon.service';
import { ReturnService } from './servicelayer/return/return.service';
import { InventoryService } from './servicelayer/inventory/inventory.service';
import { ShipmentService } from './servicelayer/shipment/shipment.service';
import { TransactionService } from './servicelayer/transaction/transaction.service';
import { WishlistService } from './servicelayer/wishlist/wishlist.service';
import { OrderService } from './servicelayer/order/order.service';
import { BankaccountService } from './servicelayer/bankaccount/bankaccount.service';
import { CustomerService } from './servicelayer/customer/customer.service';
import { SignInPageService } from './auth/sign-in-page/sign-in-page.service';
import { AppService } from './app.service';
import { ProductService } from './servicelayer/product/product.service';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShowImageComponent } from './bag/show-image/show-image.component';

export function hammerConfigFactory() {
  return () => {
    const config = new HammerGestureConfig();
    config.overrides = {
      swipe: {direction: Hammer.DIRECTION_ALL},
    };
    return config;
  };
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    UiModule,
    HeaderModule,
    FooterModule,
    SliderModule,
    RouterModule,
    ChatModule,
   
   
  ],
  declarations: [
    AppComponent,
    TrackComponent
  ],
  providers: [
    SortService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useFactory: hammerConfigFactory(),
    },
    CustomerService,
    ProductService,
    ChatService,
    CardService,
    ProductImage,
    ProductimageService,
    CartproductService,
    CartService,
    AddressService,
    InvoiceService,
    CouponService,
    ReturnService,
    InventoryService,
    ShipmentService,
    TransactionService,
    WishlistService,
    OrderService,
    BankaccountService,
    CustomerService,
    SignInPageService,
    AppService,
    

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
