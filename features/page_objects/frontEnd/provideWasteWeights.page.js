const FrontEndPageObject = require('./base/FrontEndPageObject').FrontEndPageObject

class ProvideWasteWeightsPage extends FrontEndPageObject {
    get nonhazardousThroughputInput() { return { css: '#non-hazardous-throughput' } }
    get nonhazardousMaximumThroughputInput() { return { css: '#non-hazardous-maximum' } }
    get hazardousThroughputInput() { return { css: '#hazardous-throughput' } }
    get hazardousMaximumThroughputInput() { return { css: '#hazardous-maximum' } }

    get hazardoustreatmentCheckBox() { return { css: '#treatment-hazardous-input' } }
    get treatmentbiologicalCheckBox() { return { css: '#treatment-biological-input' } }
    get treatmentchemicalCheckBox() { return { css: '#treatment-chemical-input' } }
    get treatmentincinerationCheckBox() { return { css: '#treatment-incineration-input' } }
    get treatmentslagsCheckBox() { return { css: '#treatment-slags-input' } }
    get treatmentmetalCheckBox() { return { css: '#treatment-metal-input' } }
    get treatmentnoneCheckBox() { return { css: '#treatment-none-input' } }

    get treatmenthazardousdailyInput() { return { css: '#treatment-hazardous-daily' } }
    get treatmentbiologicaldailyInput() { return { css: '#treatment-biological-daily' } }
    get treatmentchemicaldailyInput() { return { css: '#treatment-chemical-daily' } }
    get treatmentincinerationdailyInput() { return { css: '#treatment-incineration-daily' } }
    get treatmentslagsdailyInput() { return { css: '#treatment-slags-daily' } }
    get treatmentslmetaldailyInput() { return { css: '#treatment-metal-daily' } }

    get d1CheckBox() { return { css: '#code-d01-input'}}
    get d2CheckBox() { return { css: '#code-d02-input'}}
    get d3CheckBox() { return { css: '#code-d03-input'}}
    get d4CheckBox() { return { css: '#code-d04-input'}}
    get d5CheckBox() { return { css: '#code-d05-input'}}
    get d6CheckBox() { return { css: '#code-d06-input'}}
    get d7CheckBox() { return { css: '#code-d07-input'}}
    get d8CheckBox() { return { css: '#code-d08-input'}}
    get d9CheckBox() { return { css: '#code-d09-input'}}
    get d10CheckBox() { return { css: '#code-d10-input'}}
    get d11CheckBox() { return { css: '#code-d11-input'}}
    get d12CheckBox() { return { css: '#code-d12-input'}}
    get d13CheckBox() { return { css: '#code-d13-input'}}
    get d14CheckBox() { return { css: '#code-d14-input'}}
    get d15CheckBox() { return { css: '#code-d15-input'}}

    get r1CheckBox() { return { css: '#code-r01-input'}}
    get r2CheckBox() { return { css: '#code-r02-input'}}
    get r3CheckBox() { return { css: '#code-r03-input'}}
    get r4CheckBox() { return { css: '#code-r04-input'}}
    get r5CheckBox() { return { css: '#code-r05-input'}}
    get r6CheckBox() { return { css: '#code-r06-input'}}
    get r7CheckBox() { return { css: '#code-r07-input'}}
    get r8CheckBox() { return { css: '#code-r08-input'}}
    get r9CheckBox() { return { css: '#code-r09-input'}}
    get r10CheckBox() { return { css: '#code-r10-input'}}
    get r11CheckBox() { return { css: '#code-r11-input'}}
    get r12CheckBox() { return { css: '#code-r12-input'}}
    get r13CheckBox() { return { css: '#code-r13-input'}}
    
  
    async completePage() {
        let text = await this.getText(this.pageHeading)
        do{
            await this.input(this.nonhazardousThroughputInput, 99)
            await this.input(this.nonhazardousMaximumThroughputInput, 99)
            if (this.hazardousThroughputInput) {
                await this.input(this.hazardousThroughputInput, 99)
            }
            if (this.hazardousMaximumThroughputInput) {
                await this.input(this.hazardousMaximumThroughputInput, 99)
            }
            await this.click(this.continueButton)
            text = await this.getText(this.pageHeading)
        }
        while (text !== 'Apply for a bespoke environmental permit');
    }

    async completeWasteTreatmentPage() {
        let text = await this.getText(this.pageHeading)
        do{
            await this.click(this.hazardoustreatmentCheckBox)
            // await this.click(this.treatmentbiologicalCheckBox)
            // await this.click(this.treatmentchemicalCheckBox)
            // await this.click(this.treatmentincinerationCheckBox)
            // await this.click(this.treatmentslagsCheckBox)
            // await this.click(this.treatmentmetalCheckBox)
            await this.click(this.continueButton)

            await this.input(this.treatmenthazardousdailyInput,99)
            // await this.input(this.treatmentbiologicaldailyInput,99)
            // await this.input(this.treatmentchemicaldailyInput,99)
            // await this.input(this.treatmentincinerationdailyInput,99)
            // await this.input(this.treatmentslagsdailyInput,99)
            // await this.input(this.treatmentslmetaldailyInput,99)
            await this.click(this.continueButton)

            text = await this.getText(this.pageHeading)
        }
        while (text !== 'Apply for a bespoke environmental permit');
    }

    async completeDandRCodesPage() {
        let text = await this.getText(this.pageHeading)
        do{
             await this.click(this.d1CheckBox)
            //  await this.click(this.d2CheckBox)
            //  await this.click(this.d3CheckBox)
            //  await this.click(this.d4CheckBox)
            //  await this.click(this.d5CheckBox)
            //  await this.click(this.d6CheckBox)
            //  await this.click(this.d7CheckBox)
            //  await this.click(this.d8CheckBox)
            //  await this.click(this.d9CheckBox)
            //  await this.click(this.d10CheckBox)
            //  await this.click(this.d11CheckBox)
            //  await this.click(this.d12CheckBox)
            //  await this.click(this.d13CheckBox)
            //  await this.click(this.d14CheckBox)
            //  await this.click(this.d15CheckBox)
             await this.click(this.continueButton)

             await this.click(this.r1CheckBox)
            //  await this.click(this.r2CheckBox)
            //  await this.click(this.r3CheckBox)
            //  await this.click(this.r4CheckBox)
            //  await this.click(this.r5CheckBox)
            //  await this.click(this.r6CheckBox)
            //  await this.click(this.r7CheckBox)
            //  await this.click(this.r8CheckBox)
            //  await this.click(this.r9CheckBox)
            //  await this.click(this.r10CheckBox)
            //  await this.click(this.r11CheckBox)
            //  await this.click(this.r12CheckBox)
            //  await this.click(this.r13CheckBox)
             await this.click(this.continueButton)
             
            text = await this.getText(this.pageHeading)
        }
        while (text !== 'Apply for a bespoke environmental permit');
    }
}

module.exports = ProvideWasteWeightsPage
