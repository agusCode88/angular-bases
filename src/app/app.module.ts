import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroModule } from './heroes/hero.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CounterModule,
        DbzModule,
        AppRoutingModule,
        
    ]
})
export class AppModule { }
