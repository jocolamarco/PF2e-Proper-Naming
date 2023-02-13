import client from './lib/foundry.js'

class LabelFixer{
    static renderSettingsConfig =  (app, element, options) => {
        console.log('renderSettingsConfig');
        
        $(element).find('[data-tab="modules"] .settings-list > h2.module-header').each((index, module) => {
            console.log('Find Module Names');

        });

    }

}

Hooks.once('init', () => {
    
    console.log('Hook is on');
   
});

/* Trigger once Settings Menu is opened */
Hooks.on('renderSettingsConfig',LabelFixer.renderSettingsConfig);