import { Component, forwardRef } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
/*
const tabBsFroupProviders = [
    {
        provide: TabGroupComponent,
        useExisting: forwardRef(() => TabBsGroupComponent )
    }
]
*/
@Component({
    selector:`tab-bs-group`,
    template:`
        <ul class="nav">
            <li class="nav-item" *ngFor="let tab of tabPanelList; index as idx">
                <a class="nav-link" [class.active]="idx === activeIndex"
                 (click)="activeIndexChange.emit(idx)">
                    {{tab.title}}
                    <button class="btn btn-sn btn-danger" (click)="removeTab(tab)">x</button>
                </a>
            </li>  
        </ul>
        <div class="tab-body" *ngIf="tabPanelList.length;else noTabs">
            <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
        </div>
        <ng-template #noTabs>
            No tabs
        </ng-template>
    `,
    providers: [
        {
           provide: TabGroupComponent,
           useExisting: TabBsGroupComponent 
        }
    ] 
})
//    providers: tabBsFroupProviders
export class TabBsGroupComponent extends TabGroupComponent{}