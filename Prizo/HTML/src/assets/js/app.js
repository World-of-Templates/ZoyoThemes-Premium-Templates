/* Template Name: Prizo - Tailwind CSS Pricing Pages Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Website: http://zoyothemes.com/
   Version: 1.0.0
   Created: January 2024
   File: Main Css File
*/

//============= 01) Navtabs ===============//
try {
    const Default = {
        defaultTabId: null,
        activeClasses: 'text-white bg-primary',
        inactiveClasses: 'hover:text-primary dark:hover:text-white hover:bg-primary-light',
        onShow: () => { }
    }

    class Tabs {
        constructor(items = [], options = {}) {
            this._items = items
            this._activeTab = options ? this.getTab(options.defaultTabId) : null
            this._options = { ...Default, ...options }
            this._init()
        }

        _init() {
            if (this._items.length) {
                // set the first tab as active if not set by explicitly
                if (!this._activeTab) {
                    this._setActiveTab(this._items[0])
                }

                // force show the first default tab
                this.show(this._activeTab.id, true)

                // show tab content based on click
                this._items.map(tab => {
                    tab.triggerEl.addEventListener('click', () => {
                        this.show(tab.id)
                    })
                })
            }
        }

        getActiveTab() {
            return this._activeTab
        }

        _setActiveTab(tab) {
            this._activeTab = tab
        }

        getTab(id) {
            return this._items.filter(t => t.id === id)[0]
        }

        show(id, forceShow = false) {
            const tab = this.getTab(id)

            // don't do anything if already active
            if (tab === this._activeTab && !forceShow) {
                return
            }

            // hide other tabs
            this._items.map(t => {
                if (t !== tab) {
                    t.triggerEl.classList.remove(...this._options.activeClasses.split(" "));
                    t.triggerEl.classList.add(...this._options.inactiveClasses.split(" "));
                    t.targetEl.classList.add('hidden')
                    t.triggerEl.setAttribute('aria-selected', false)
                }
            })

            // show active tab
            tab.triggerEl.classList.add(...this._options.activeClasses.split(" "));
            tab.triggerEl.classList.remove(...this._options.inactiveClasses.split(" "));
            tab.triggerEl.setAttribute('aria-selected', true)
            tab.targetEl.classList.remove('hidden')

            this._setActiveTab(tab)

            // callback function
            this._options.onShow(this, tab)
        }

    }

    window.Tabs = Tabs;

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-tabs-toggle]').forEach(triggerEl => {

            const tabElements = []
            let defaultTabId = null
            triggerEl.querySelectorAll('[role="tab"]').forEach(el => {
                const isActive = el.getAttribute('aria-selected') === 'true'
                const tab = {
                    id: el.getAttribute('data-tabs-target'),
                    triggerEl: el,
                    targetEl: document.querySelector(el.getAttribute('data-tabs-target'))
                }
                tabElements.push(tab)

                if (isActive) {
                    defaultTabId = tab.id
                }
            })
            new Tabs(tabElements, {
                defaultTabId: defaultTabId
            })
        })
    })
} catch (error) {

}

/*================================
 *      02.  lucide Js           *
 ================================*/
lucide.createIcons();
