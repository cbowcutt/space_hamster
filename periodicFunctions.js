function Trochoid(x0, y0, a, b, t)
{
	var x = (a * t) - (b * Math.sin(t));
	var y = a - (b * Math.cos(t));
	return { x: x0 + x, y: y0 + y};
}



function Galaga(Period, t)
{
	var sin = Math.sin(t/Period);
	if (sin < 0)
	{
		return 0;
	}
	return sin;
}