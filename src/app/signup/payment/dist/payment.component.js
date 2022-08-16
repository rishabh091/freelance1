"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaymentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_interface_1 = require("src/app/interface/auth.interface");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(formBuilder, route, apiAuthService, auth) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.apiAuthService = apiAuthService;
        this.auth = auth;
        this.submitted = false;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            acceptedCurrency: ['', forms_1.Validators.required],
            accountNumber: ['', forms_1.Validators.required],
            ifcsCode: ['', forms_1.Validators.required],
            accountHolderName: ['', forms_1.Validators.required]
        });
        this.phoneNumber = this.route.snapshot.paramMap.get('phoneNumber');
    };
    Object.defineProperty(PaymentComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    PaymentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var payload = new auth_interface_1.UpdatePaymentModule(new auth_interface_1.UserInfo(this.phoneNumber), new auth_interface_1.StorePayment(this.form.value.acceptedCurrency, this.form.value.accountNumber, this.form.value.ifcsCode, this.form.value.accountHolderName));
        this.apiAuthService
            .updateAddress(payload)
            .then(function (res) {
            _this.auth.login();
        })["catch"](function (error) {
            console.log(error);
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.css']
        })
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;
