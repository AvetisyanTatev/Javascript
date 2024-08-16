import {test, expect} from '@playwright/test';
import {debug} from "node:util";

test.beforeEach(async ({ page }) => {
    console.log('Starting navigation')
    await page.goto('https://demoqa.com/automation-practice-form');

});

test("Full name, valid name", async ({page}) => {
    const fullNameElement = await page.getByPlaceholder('Full Name');
    const submitButton = await page.getByRole('button', {name: 'Submit'});
    const fullNameValue = 'Tatevik Avetisyan';
    await fullNameElement.click();
    await fullNameElement.fill(fullNameValue);
    await submitButton.click();

    const resultElement = await page.locator('#name');
    const resultValue = await resultElement.textContent();
    await expect(resultElement).toBeVisible();
     expect(resultValue).toContain(fullNameValue);

})
test("Full Name , 'Empty Name'", async({page}) => {
    const fullNameElement = await page.getByPlaceholder("Full Name");
    const submitBtn = await page.getByRole('button', {name: "Submit"});
    const invalidEmailValue = "";

    await fullNameElement.click();
    await fullNameElement.fill(invalidEmailValue);
    await submitBtn.click();

    const resultElement = await page.locator('#name');
    // const elementCount = await resultElement.count();
    // const resultElementText = await resultElement.textContent();

    await expect(resultElement).toHaveCount(0);
    expect(resultElementText).toContain(invalidEmailValue);

})

test("Email 'Invalid cases'", async ({page}) => {
    const emailElement = await page.getByPlaceholder('name@example.com');
    const submitBtn = await page.getByRole('button', {name: "Submit"});
    const invalidEmailValue  = "ygfehsf";

    await emailElement.click();
    await emailElement.fill(invalidEmailValue);
    await submitBtn.click();

    // const failureResult = await page.locator('.field-error');
    // await expect(failureResult).to Visible();

    await expect(emailElement).toHaveClass(/.*field-error*/);
})

test("Full name, 'With Symbols'", async ({page}) => {
    const fullNameElement = await page.getByPlaceholder('Full Name');
    const submitButton = await page.getByRole('button', {name: 'Submit'});
    const fullNameValue = '!@#$%^&*()';
    await fullNameElement.click();
    await fullNameElement.fill(fullNameValue);
    await submitButton.click();

    const resultElement = await page.locator('#name');
    const resultValue = await resultElement.textContent();
    await expect(resultElement).toBeVisible();
    expect(resultValue).toContain(fullNameValue);

})
const invalidEmailValue  = ["nameexample.com", 'name@example', 'name@example.c', '/@#$.com', '234567890'];

invalidEmailValue.forEach(value => {
    test(`Email: ${value}`,  async ({page}) =>{
    const emailElement = await page.getByPlaceholder('name@example.com');
    const submitBtn = await page.getByRole('button', {name: "Submit"});

    await emailElement.click();
    await emailElement.fill(value);
    await submitBtn.click();

    await expect(emailElement).toHaveClass(/.*field-error*/);



})})

test.only("Practice Form, Positive test", async ({page}) => {
    const firstName = await page.getByPlaceholder('First Name');
    const firstNameValue = "Tatevik";
    const lastName = await page.getByPlaceholder('Last Name');
    const lastNameValue = "Avetisyan";
    const emailField = await page.getByPlaceholder('name@example.com');
    const emailFieldValue = "sdfghj2345@gmail.com";
    const radioBtnMale = await page.locator('#gender-radio-1').locator('..');
    const radioBtnFemale = await page.locator('#gender-radio-2').locator('..');
    const radioBtnOther = await page.locator('#gender-radio-3').locator('..');
    const mobileNumber = await page.getByPlaceholder('Mobile Number');
    const mobileNumberValue = "1234567890";
    const dateOfBirth = await page.locator('#dateOfBirthInput');
    const subjectContainerClick = await page.locator('#subjectsContainer');
    const subjectContainerFill = await page.locator('#subjectsContainer').locator('[id="subjectsInput"]');
    const subjectOption = await page.locator("#react-select-2-option-0");
    const subjectElementValue = "Math";
    const hobbiesCheckboxSports = await page.locator('#hobbies-checkbox-1').locator('..');
    const hobbiesCheckboxReading = await page.locator('#hobbies-checkbox-2').locator('..');
    const hobbiesCheckboxMusic = await page.locator('#hobbies-checkbox-3').locator('..');

    const currentAddress = await page.locator('#currentAddress');
    const currentAddressValue = "Country: Armenia, Region: Shirak, City: Gyumri";
    const selectState = await page.locator('#state');
    const selectStateOption = await page.locator('#selectState');
    const selectStateValue = "NCR";
    const selectStateInput =   await page.locator('#react-select-3-input');
    const selectStateOptionOne = await page.locator("#react-select-3-option-0");
    const selectCity = await page.locator('#city');
    const selectCityInput = await page.locator("#react-select-4-input");
    const selectCityValue = "Delhi";
    const selectCityOptionOne = await page.locator("#react-select-4-option-0");

    const submitBtn = await page.getByRole('button', {name: "Submit"});

    await firstName.click();
    await firstName.fill(firstNameValue);

    await lastName.click();
    await lastName.fill(lastNameValue);


    await emailField.click();
    await emailField.fill(emailFieldValue);

    await radioBtnMale.click();

    await mobileNumber.click();
    await mobileNumber.fill(mobileNumberValue);

    await subjectContainerClick.click();

    await subjectContainerFill.fill(subjectElementValue);

    await subjectOption.click();

    await hobbiesCheckboxSports.click();
    await hobbiesCheckboxReading.click();
    await hobbiesCheckboxMusic.click();

    await currentAddress.click();
    await currentAddress.fill(currentAddressValue);

    await selectState.click();
    await selectStateInput.fill(selectStateValue);
    await selectStateOptionOne.click();


    await selectCity.click();
    await selectCityInput.fill(selectCityValue);
    await selectCityOptionOne.click();


    await submitBtn.click();

    const thanksSubmittingForm = await page.locator("#example-modal-sizes-title-lg");

    await expect(thanksSubmittingForm).toHaveText("Thanks for submitting the form");





















})

