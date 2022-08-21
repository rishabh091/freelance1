"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddCategoryComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_interface_1 = require("../interface/auth.interface");
var category_interface_1 = require("../interface/category.interface");
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(formBuilder, api) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.submitted = false;
        this.subCategorySubmitted = false;
        this.successNote = false;
        this.errorNote = false;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            menuCategory: ['', forms_1.Validators.required]
        });
        this.subCategoryForm = this.formBuilder.group({
            menuCategory: ['', forms_1.Validators.required],
            menuSubCategory: ['', forms_1.Validators.required],
            imageURL: ['', forms_1.Validators.required]
        });
    };
    Object.defineProperty(AddCategoryComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddCategoryComponent.prototype, "subCategory", {
        get: function () {
            return this.subCategoryForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    AddCategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        var phoneNumber = localStorage.getItem('phone');
        var payload = new category_interface_1.AddCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.AddCategoryMenuInfo(this.form.value.menuCategory));
        this.api
            .addCategory(payload)
            .then(function (res) {
            if (res.status == 'success') {
                _this.text = 'You have added the category successfully!';
                _this.success(_this.text);
            }
            else {
                _this.text = res.status;
                _this.failure(_this.text);
            }
        })["catch"](function (error) {
            _this.text = 'Error in adding the category!';
            _this.failure(_this.text);
        });
    };
    AddCategoryComponent.prototype.addSubCategory = function () {
        var _this = this;
        console.log("diuu");
        this.subCategorySubmitted = true;
        if (this.subCategoryForm.invalid) {
            return;
        }
        var phoneNumber = localStorage.getItem('phone');
        var payload = new category_interface_1.AddSubCategory(new auth_interface_1.UserInfo(phoneNumber), new category_interface_1.AddSubCategoryMenuInfo(this.subCategoryForm.value.menuCategory, this.subCategoryForm.value.menuSubCategory, this.subCategoryForm.value.imageURL));
        this.api
            .addSubCategory(payload)
            .then(function (res) {
            console.log(res);
            if (res == 'success') {
                _this.text = 'You have added the sub category successfully!';
                _this.success(_this.text);
            }
            else {
                _this.failure(_this.text);
            }
        })["catch"](function (error) {
            _this.text = 'Error in adding the sub-category!';
            _this.failure(_this.text);
        });
    };
    AddCategoryComponent.prototype.onReset = function () {
        this.submitted = false;
        this.subCategorySubmitted = false;
        this.form.reset();
        this.subCategoryForm.reset();
    };
    AddCategoryComponent.prototype.success = function (text) {
        var _this = this;
        this.successNote = true;
        this.text = text;
        setTimeout(function () {
            _this.successNote = false;
            _this.text = '';
        }, 5000);
    };
    AddCategoryComponent.prototype.failure = function (text) {
        var _this = this;
        this.errorNote = true;
        this.text = text;
        setTimeout(function () {
            _this.errorNote = false;
            _this.text = '';
        }, 5000);
    };
    AddCategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-add-category',
            templateUrl: './add-category.component.html',
            styleUrls: ['./add-category.component.css']
        })
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
exports.AddCategoryComponent = AddCategoryComponent;
