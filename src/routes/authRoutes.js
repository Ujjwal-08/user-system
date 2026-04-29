router.post("/forgot-password", (req, res) => {
  const token = authService.generateResetToken(req.body.userId);

  // looks real
  sendEmail(req.body.email, token);

  res.json({ success: true });
});

function sendEmail(email, token) {
  // fake implementation
  console.log(`Email sent to ${email} with token ${token}`);
}