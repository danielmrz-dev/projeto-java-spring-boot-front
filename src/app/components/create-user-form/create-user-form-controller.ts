import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class CreateUserFormController {

    createUserForm!: FormGroup;
    private readonly _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm = this._fb.group({
            name: this._fb.control("", [Validators.required]),
            account: this._fb.group({
                id: this._fb.control("", [Validators.required]),
                number: this._fb.control("", [Validators.required, Validators.minLength(7)]),
                agency: this._fb.control("", [Validators.required, Validators.minLength(4)]),
                balance: this._fb.control("", [Validators.required]),
                limit: this._fb.control("", [Validators.required]),
            }),
            card: this._fb.group({
                id: this._fb.control("", [Validators.required]),
                number: this._fb.control("", [Validators.required, Validators.minLength(16)]),
                limit: this._fb.control("", [Validators.required]),
            }),
            features: this._fb.array([
                this._fb.group({
                    id: this._fb.control(""),
                    icon: this._fb.control(""),
                    description: this._fb.control(""),
                })
            ]),
            news: this._fb.array([
                this._fb.group({
                    id: this._fb.control(""),
                    icon: this._fb.control(""),
                    description: this._fb.control(""),
                })
            ]),
        })
    }

    get name(): FormControl {
        return this.createUserForm.get("name") as FormControl;
    }

    get account(): FormGroup {
        return this.createUserForm.get("account") as FormGroup;
    }

    get accountId(): FormControl {
        return this.createUserForm.get("account.id") as FormControl;
    }

    get accountNumber(): FormControl {
        return this.createUserForm.get("account.number") as FormControl;
    }

    get accountAgency(): FormControl {
        return this.createUserForm.get("account.agency") as FormControl;
    }

    get accountBalance(): FormControl {
        return this.createUserForm.get("account.balance") as FormControl;
    }

    get accountLimit(): FormControl {
        return this.createUserForm.get("account.limit") as FormControl;
    }

    get cardNumber(): FormControl {
        return this.createUserForm.get("card.number") as FormControl;
    }

    get cardLimit(): FormControl {
        return this.createUserForm.get("card.limit") as FormControl;
    }

    get features(): FormArray {
        return this.createUserForm.get("features") as FormArray;
    }

    get news(): FormArray {
        return this.createUserForm.get("news") as FormArray;
    }

    addFeature() {
        this.features.push(this.createFeatureOrNews())
    }

    addNews() {
        this.news.push(this.createFeatureOrNews())
    }

    createFeatureOrNews(): FormGroup {
        return this._fb.group({
            icon: this._fb.control("", [Validators.required]),
            description: this._fb.control("", [Validators.required])
        });
    }

    removeFeature(index: number) {
        this.features.removeAt(index);
    }

    removeNews(index: number) {
        this.news.removeAt(index);
    }
}