import {NgModule} from '@angular/core';
// // MDC
// import {MdcTopAppBarModule} from '@angular-mdc/web/top-app-bar';
// import {MdcIconModule} from '@angular-mdc/web/icon';
// import {MdcDrawerModule} from '@angular-mdc/web/drawer';
// import {MdcListModule} from '@angular-mdc/web/list';
// import {MdcButtonModule} from '@angular-mdc/web/button';
// import {MdcTabBarModule} from '@angular-mdc/web/tab-bar';
// import {MdcSnackbarModule} from '@angular-mdc/web/snackbar';
// import {MdcDialogModule} from '@angular-mdc/web/dialog';
// import {MdcCardModule} from '@angular-mdc/web/card';
// import {MdcCheckboxModule} from '@angular-mdc/web/checkbox';
// import {MdcChipsModule} from '@angular-mdc/web/chips';
// import {MDCDataTableModule} from '@angular-mdc/web/data-table';
// import {MdcFabModule} from '@angular-mdc/web/fab';
// import {MdcElevationModule} from '@angular-mdc/web/elevation';
// import {MdcIconButtonModule} from '@angular-mdc/web/icon-button';
// import {MdcImageListModule} from '@angular-mdc/web/image-list';
// import {MdcLinearProgressModule} from '@angular-mdc/web/linear-progress';
// import {MdcMenuModule} from '@angular-mdc/web/menu';
// import {MdcRadioModule} from '@angular-mdc/web/radio';
// import {MdcRippleModule} from '@angular-mdc/web/ripple';
// import {MdcSelectModule} from '@angular-mdc/web/select';
// import {MdcSliderModule} from '@angular-mdc/web/slider';
// import {MdcSwitchModule} from '@angular-mdc/web/switch';
// import {MdcTextFieldModule} from '@angular-mdc/web/textfield';
// import {MdcTypographyModule} from '@angular-mdc/web/typography';

//MAT
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

// const MDC_MODULES = [
//   MdcButtonModule,
//   MdcCardModule,
//   MdcCheckboxModule,
//   MdcChipsModule,
//   MDCDataTableModule,
//   MdcDialogModule,
//   MdcDrawerModule,
//   MdcElevationModule,
//   MdcFabModule,
//   MdcIconButtonModule,
//   MdcIconModule,
//   MdcImageListModule,
//   MdcLinearProgressModule,
//   MdcListModule,
//   MdcMenuModule,
//   MdcRadioModule,
//   MdcRippleModule,
//   MdcSelectModule,
//   MdcSliderModule,
//   MdcSnackbarModule,
//   MdcSwitchModule,
//   MdcTabBarModule,
//   MdcTextFieldModule,
//   MdcTopAppBarModule,
//   MdcTypographyModule
// ];
const MAT_MODULES = [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
];
@NgModule({
  exports: [MAT_MODULES]
})
export class MaterialModule {}
