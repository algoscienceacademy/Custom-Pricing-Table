document.addEventListener('DOMContentLoaded', () => {
    const billingToggle = document.getElementById('billingToggle');
    const prices = document.querySelectorAll('.amount');
    const periods = document.querySelectorAll('.period');

    // Price update function with animation
    const updatePrices = (isYearly) => {
        prices.forEach(price => {
            // Fade out
            price.style.opacity = '0';
            price.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                const value = isYearly ? price.dataset.yearly : price.dataset.monthly;
                price.textContent = `$${value}`;
                
                // Fade in
                price.style.opacity = '1';
                price.style.transform = 'translateY(0)';
            }, 200);
        });

        periods.forEach(period => {
            period.style.opacity = '0';
            setTimeout(() => {
                period.textContent = isYearly ? '/year' : '/month';
                period.style.opacity = '1';
            }, 200);
        });
    };

    // Toggle event listener
    billingToggle.addEventListener('change', (e) => {
        updatePrices(e.target.checked);
    });

    // Button click animations
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            if(this.textContent === 'Contact Sales') {
                alert('Our sales team will contact you shortly!');
            } else {
                alert('Thank you for choosing this plan!');
            }
        });
    });

    // Add hover animations for cards
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 