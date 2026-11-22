import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Developer's Paradise/);
    await expect(page.getByRole('heading', { name: /Empowering Innovation/i })).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /About Us/i }).click();
    await expect(page).toHaveURL(/.*\/about/);
    await expect(page.getByRole('heading', { name: /Developer's Paradise/i })).toBeVisible();
  });

  test('should navigate to Services page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Services/i }).click();
    await expect(page).toHaveURL(/.*\/services/);
    await expect(page.getByRole('heading', { name: /Our Projects & Expertise/i })).toBeVisible();
  });

  test('should navigate to Team page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Our Team/i }).click();
    await expect(page).toHaveURL(/.*\/team/);
    await expect(page.getByRole('heading', { name: /Our Extraordinary Team/i })).toBeVisible();
  });

  test('should navigate to Portfolio page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Portfolio/i }).click();
    await expect(page).toHaveURL(/.*\/portfolio/);
    await expect(page.getByRole('heading', { name: /Our Work/i })).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Contact Us/i }).click();
    await expect(page).toHaveURL(/.*\/contact/);
    await expect(page.getByRole('heading', { name: /Get in Touch/i })).toBeVisible();
  });

  test('should navigate to Testimonials page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /Testimonials/i }).click();
    await expect(page).toHaveURL(/.*\/testimonials/);
    await expect(page.getByRole('heading', { name: /What Our Clients Say/i })).toBeVisible();
  });

  test('should highlight active navigation link', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByRole('link', { name: /About Us/i })).toHaveAttribute('aria-current', 'page');
  });
});

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with typewriter text', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Empowering Innovation/i })).toBeVisible();
    await expect(page.getByText(/Web Development|Mobile Solutions|Enterprise Software|Cloud Engineering/)).toBeVisible();
  });

  test('should display services grid with 6 services', async ({ page }) => {
    await expect(page.getByText(/Web Development/i)).toBeVisible();
    await expect(page.getByText(/Mobile App Development/i)).toBeVisible();
    await expect(page.getByText(/Backend Development/i)).toBeVisible();
    await expect(page.getByText(/Enterprise Web Solutions/i)).toBeVisible();
    await expect(page.getByText(/Cloud Migration Services/i)).toBeVisible();
    await expect(page.getByText(/AI & Machine Learning/i)).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Trusted by Our Clients/i })).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Start Your Project/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Explore Services/i })).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should show validation errors for empty form', async ({ page }) => {
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText('Name is required.')).toBeVisible();
    await expect(page.getByText('Email is required.')).toBeVisible();
    await expect(page.getByText('Message is required.')).toBeVisible();
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.getByLabelText(/Email Address/i).fill('not-an-email');
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText(/valid email address/)).toBeVisible();
  });

  test('should submit form successfully with valid data', async ({ page }) => {
    await page.getByLabelText(/Full Name/i).fill('John Doe');
    await page.getByLabelText(/Email Address/i).fill('john@example.com');
    await page.getByLabelText(/Message/i).fill('This is a test message for the contact form.');
    await page.getByRole('button', { name: /Send Message/i }).click();
    await expect(page.getByText(/Thank you/i)).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await expect(page.getByText(/tech.developersteam.service@gmail.com/i)).toBeVisible();
    await expect(page.getByText(/\+91 94262 84943/i)).toBeVisible();
    await expect(page.getByText(/Gift City, Gandhinagar/i)).toBeVisible();
  });
});

test.describe('Team Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team');
  });

  test('should display all 7 team members', async ({ page }) => {
    await expect(page.getByText(/Rajvi Adesara/i)).toBeVisible();
    await expect(page.getByText(/Vivek Khunt/i)).toBeVisible();
    await expect(page.getByText(/Meet Parekh/i)).toBeVisible();
    await expect(page.getByText(/Samarth Mehta/i)).toBeVisible();
    await expect(page.getByText(/Nilay Dhandhukiya/i)).toBeVisible();
    await expect(page.getByText(/Bhargav Bhagiya/i)).toBeVisible();
    await expect(page.getByText(/Prit Vasani/i)).toBeVisible();
  });

  test('should open member detail modal on card click', async ({ page }) => {
    await page.getByText(/Rajvi Adesara/i).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText(/Rajvi Adesara/i)).toBeVisible();
  });

  test('should close modal when clicking close button', async ({ page }) => {
    await page.getByText(/Rajvi Adesara/i).click();
    await page.getByLabelText(/Close modal/i).click();
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should close modal when pressing Escape', async ({ page }) => {
    await page.getByText(/Rajvi Adesara/i).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });
});

test.describe('Testimonials Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/testimonials');
  });

  test('should display testimonials with ratings', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /What Our Clients Say/i })).toBeVisible();
    await expect(page.getByText(/Sarah Chen/i)).toBeVisible();
    await expect(page.getByText(/★★★★★/)).toBeVisible();
  });

  test('should navigate through testimonials', async ({ page }) => {
    const firstQuote = page.getByText(/transformed our legacy system/i);
    await expect(firstQuote).toBeVisible();
    await page.getByLabelText(/Next testimonial/i).click();
    await expect(firstQuote).not.toBeVisible();
  });

  test('should pause testimonial rotation', async ({ page }) => {
    await page.getByLabelText(/Pause testimonial rotation/i).click();
    await expect(page.getByText(/Rotation paused/i)).toBeVisible();
  });
});

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('should display portfolio projects', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Our Work/i })).toBeVisible();
    await expect(page.getByText(/Real Estate Platform/i)).toBeVisible();
    await expect(page.getByText(/Planty/i)).toBeVisible();
    await expect(page.getByText(/Employee UMS/i)).toBeVisible();
  });

  test('should filter projects by category', async ({ page }) => {
    await page.getByRole('button', { name: /Mobile/i }).click();
    await expect(page.getByText(/Planty/i)).toBeVisible();
    await expect(page.getByText(/Employee PRO/i)).toBeVisible();
  });

  test('should toggle between grid and list view', async ({ page }) => {
    await expect(page.getByLabelText(/Grid view/i)).toBeVisible();
    await expect(page.getByLabelText(/List view/i)).toBeVisible();
  });
});
