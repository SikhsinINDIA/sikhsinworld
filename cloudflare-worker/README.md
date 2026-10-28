# sikhsinworld.com Worker

Shows sikhsinindia.com's pages on sikhsinworld.com with the Sikhs in World logo,
without copying any HTML. How it works is described at the top of `src/index.js`.

## Test on this computer

```
cd C:\Users\Hp\Desktop\SikhsinWORLD\cloudflare-worker
..\..\SikhsinINDIA\node_modules\.bin\wrangler dev --port 8799 --var WORLD_ORIGIN:https://sikhsinworld.com
```

Then open http://127.0.0.1:8799/01-about-sikhism/01-01-sikh-gurus/01-01-sikh-gurus.html

## Going live (once)

1. **Add sikhsinworld.com to Cloudflare** (dash.cloudflare.com → Add a domain →
   `sikhsinworld.com` → Free plan). Cloudflare copies the DNS records from GoDaddy;
   check the four `A` records (185.199.108.153 … 185.199.111.153) and the `www`
   `CNAME` are there and set to **Proxied** (orange cloud).
2. **SSL/TLS → Overview → Full** (not Flexible, not Full strict).
3. **GoDaddy → My Products → sikhsinworld.com → DNS → Nameservers → Change →
   "I'll use my own nameservers"** and enter the two nameservers Cloudflare shows.
4. Wait until Cloudflare says the domain is **Active** (minutes, sometimes a few hours).
5. **Deploy the Worker** (uses the Cloudflare login already set up for the email Worker):

   ```
   cd C:\Users\Hp\Desktop\SikhsinWORLD\cloudflare-worker
   ..\..\SikhsinINDIA\node_modules\.bin\wrangler deploy
   ```

GitHub Pages keeps serving sikhsinworld.com's own pages as before; nothing changes there.

## To undo

Delete the Worker's route in Cloudflare (Workers & Pages → sikhsinworld-frame →
Settings → Domains & Routes). sikhsinworld.com then serves only its own pages again.
