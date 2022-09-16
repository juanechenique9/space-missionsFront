import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreComponent } from '../../core/core/core.component';
import { SidenavComponent } from '../../sidenav/sidenav/sidenav.component';

import { ContentsComponent } from './contents.component';

describe('ContentsComponent', () => {
  let component: ContentsComponent;
  let fixture: ComponentFixture<ContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, BrowserAnimationsModule],
      declarations: [ ContentsComponent, CoreComponent, SidenavComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
