

function viewStudentStats(id, toggle)
{
	if(toggle == 0)
	{
		console.log(id);
		document.getElementById(id).style.visibility = "hidden";
		document.getElementById(id).style.height = "0px";
	}
	else
	{
		document.getElementById(id).style.visibility = "visible";
		document.getElementById(id).style.height = "auto";
	}
}

function WinnerWinnerChickenDinner(item)
{
	if(item.home_score > item.visitor_score)
	{
		return "CU BOULDER";
	}
	else
	{
		return item.visitor_name;
	}
}
