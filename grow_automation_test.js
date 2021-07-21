describe('expand metric', () => {
    beforeEach(() => {
        cy.visit('https://app.gogrow.com/login')
    })

    // Test #A - Expand Metric
    it('view dashboard with metrics', () => {
        // login email credentials
        cy.get('.STATIC-logIn-email')
            .type('zmalone32@gmail.com').should('have.value', 'zmalone32@gmail.com')

        // login password credentials
        cy.get('.STATIC-logIn-password')
            .type('growpassword').should('have.value', 'growpassword')

        // click login
        cy.get('.STATIC-logIn-logInButton').click()

        // hover over the dashboard metric and expand it
        cy.get('.dragResizeWrapper---dragResizeWrapper---bWuFG').trigger("mousemove")
        cy.get('.STATIC-dashboard-metric-expandMetric').click()
        /* There was an error occurring because it was clicking
        too quickly so I made the thread sleep
        for a second to give time for the data to load*/
        cy.wait(1000)
        // click the "x" to leave the expanded view
        cy.get('.topBar---closeButton---2K74G > svg').click()


    // Test #D - Verify Dashboards
        // Click the gear icon to access settings
        cy.get('.settingsMenu---settingsIcon---3Uq6F').click()
        // Click Dashboards tab
        cy.get('.STATIC-settings-dashboards').click()
        // Assert that the dashboards are visible
        cy.get('.settingsTitle---title---1oBGf')
            .wait(500) // Wait for dashboard to load
            .should('have.text','Dashboards')

        // Log out of the web page
        cy.get('.avatar---initials---3gz8C').click()
        cy.get('.STATIC-globalNav-accountUserSettings-logout').click()

        // Thanks for your time! I look forward to working with you.
        cy.get('.STATIC-logIn-email')
            .type("Can't_wait_to_work_at_Grow!").should('have.value', "Can't_wait_to_work_at_Grow!")
    })})