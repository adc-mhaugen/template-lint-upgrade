import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sample', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(hbs`<Sample @passedProperty={{true}} />`);

        assert.dom('div.sample').exists();
        assert.dom('p').hasText('Some Text');
    });

    test('it does not render', async function (assert) {
        await render(hbs`<Sample @passedProperty={{false}} />`);

        assert.dom('div.sample').exists();
        assert.dom('p').doesNotExist();
    });
});
