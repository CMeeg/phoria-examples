// Add a using statement
using Phoria;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

// Add Phoria services
builder.Services.AddPhoria();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");

    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();
app.MapRazorPages()
    .WithStaticAssets();

// WebSockets are required for the Vite Dev Server's HMR (Hot Module Reload) feature
if (app.Environment.IsDevelopment())
{
	app.UseWebSockets();
}

// Use the Phoria services
app.UsePhoria();

app.Run();
